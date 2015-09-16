(function(module){
	'use strict';

	module.controller('productsController',['$scope', 'product', function($scope,product) {
		$scope.products = [];
		$scope.total = 0;

		pagination(1);

		$scope.paging = function(page, pageSize, total,url){
			pagination(page);
		};

		function pagination(page){
			product.query({ page : page },function(response){
				$scope.total = response.total;
				$scope.products = response.data;
			});
		}


		$scope.remove = function(id){
			product.remove({id},function(data){
				humane.log(data.message);
			},function(){
				humane.log("Erro por favor tente mais tarde.");
			});
		}

	}]);

	module.controller('productsEditController',['menu', '$scope','money', 'product', 'productsFormService', '$routeParams', function(menu, $scope,money,product,productsFormService, $routeParams) {
		var id = $routeParams.id;
		$scope.form = {};
		$scope.menu = [];
		$scope.editing = {
			index : -1,
			isEditing : false
		}

		menu.listAll({},function(response){
			$scope.menus = response;
		})

		product.get({ id : id } ,function(data){
			$scope.form = data;
			$scope.photo = data.photo;
		});

		$scope.addIngredient = function(ingredient){
			$scope.ingredientsFieldInvalid = productsFormService.addIngredient(ingredient,$scope);
		}

		$scope.editIngredient = function($index){
			productsFormService.editIngredient($index, $scope);
		}

		$scope.isEditing = function($index){
			return productsFormService.isEditing($index, $scope);
		}

		$scope.save = function(form){
			if(form.$valid && $scope.form.ingredients.length){
				$scope.form.price = ($scope.form.price) ? money.formatToDatabase($scope.form.price) : (0.0).toFixed(2);
				product.update({id},$scope.form,successResponse,errorResponse);
			}

			function successResponse(response){
				humane.log(response.message,function(){
					$scope.ingredient = {};
				});
			}

			function errorResponse(response){
				if(response.status === 422){
					humane.log(errors.formatToHuman(response.data));
				}else{
					humane.log("Erro por favor tente mais tarde.");
				}
			}
		}


	}]);

module.controller('productsNewController',['menu','money', '$scope', 'product', 'productsFormService', 'errors', '$location', function(menu, money, $scope, product, productsFormService, errors, $location) {
	$scope.form = {};
	$scope.ingredient = {};
	$scope.form.personalizable = false;
	$scope.form.ingredients;
	$scope.menus = [];
	$scope.editing = {
		index : -1,
		isEditing : false
	}

	menu.listAll({},function(response){
		$scope.menus = response;
	})

	$scope.addIngredient = function(ingredient){
		$scope.ingredientsFieldInvalid = productsFormService.addIngredient(ingredient,$scope);
	}


	$scope.editIngredient = function($index){
		productsFormService.editIngredient($index, $scope);
	}

	$scope.isEditing = function($index){
		return productsFormService.isEditing($index, $scope);
	}

	$scope.save = function(form){
		if(form.$valid && checkIfExistsIngredients($scope.form.ingredients)){
			$scope.form.price = ($scope.form.price) ? money.formatToDatabase($scope.form.price) : (0.0).toFixed(2);
			var productNew = new product($scope.form);
			productNew.$save(successResponse,errorResponse);
		}

		function successResponse(response){
			humane.log(response.message);
			$scope.form = Object.create(null);
			$scope.ingredient = {};
		}

		function errorResponse(response){
			if(response.status === 422){
				humane.log(errors.formatToHuman(response.data));
			}else{
				humane.log("Erro por favor tente mais tarde.");
			}
		}
	}

	function checkIfExistsIngredients(ingredients){
		return ingredients && ingredients.length > 0;
	}

}]);	

})(angular.module('products'));