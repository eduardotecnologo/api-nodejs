(function(module){
	'use strict';

	module.factory('product',['$resource', function($resource){
		return $resource("/api/products/:id",{},{
			'query': {method: 'GET', isArray: false },
			update: {method: 'PUT'}
		});
	}]);

	module.service('productsFormService',['money', function(money){
		this.addIngredient = function(ingredient, $scope){
			if(ingredient && Object.keys(ingredient).length > 0){

				$scope.form.ingredients = $scope.form.ingredients || [];
				var price = (ingredient.price) ? money.formatToDatabase(ingredient.price) : (0.0).toFixed(2);
				var is_default = (!ingredient.is_default) ? false : ingredient.is_default;
				$scope.form.ingredients.push({
					name : ingredient.name,
					is_default : is_default,
					price : price,
				});
				$scope.ingredient = {};
				return false;
			}
			return true;
		};

		this.editIngredient = function($index,$scope){
			$scope.editing.index = $index;
			$scope.editing.isEditing = !$scope.editing.isEditing;
		}

		this.isEditing = function($index, $scope){
			return $scope.editing.index == $index && $scope.editing.isEditing;
		}

	}]);

})(angular.module('products'));