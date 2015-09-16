(function(module){
	'use strict';

	module.controller('menusController',['$scope', 'menu', function($scope,menu) {
		$scope.menus = [];
		$scope.total = 0;

		pagination(1);

		$scope.paging = function(page, pageSize, total,url){
			pagination(page);
		};

		function pagination(page){
			menu.query({ page : page },function(response){
				$scope.total = response.total;
				$scope.menus = response.data;
			});
		}


		$scope.remove = function(id){
			menu.remove({id},function(data){
				humane.log(data.message);
				pagination(1);
			},function(){
				humane.log("Erro por favor tente mais tarde.");
			});
		}

	}]);

	module.controller('menusEditController',['$scope', 'menu', '$routeParams', function($scope,menu, $routeParams) {
		var id = $routeParams.id;
		$scope.form = {};

		menu.get({ id : id } ,function(data){
			$scope.form = data;
			$scope.photo = data.photo;
		});

		$scope.save = function(form){
			if(form.$valid){
				menu.update({id},$scope.form,successResponse,errorResponse);
			}

			function successResponse(response){
					humane.log(response.message,function(){
						$scope.form = {};
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

module.controller('menusNewController',['$scope', 'menu', 'errors', '$location', function($scope, menu, errors, $location) {
	$scope.form = {};

	$scope.save = function(form){
		if(form.$valid){
			var menuNew = new menu($scope.form);
			menuNew.$save(successResponse,errorResponse);
		}

		function successResponse(response){
				humane.log(response.message);
				$scope.form = Object.create(null);
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

})(angular.module('menus'));