(function(module){
	'use strict';

	module.controller('tablesController',['$scope', 'table', function($scope,table) {
		$scope.tables = [];
		$scope.total = 0;

		pagination(1);

		$scope.paging = function(page, pageSize, total,url){
			pagination(page);
		};

		function pagination(page){
			table.query({ page : page },function(response){
				$scope.total = response.total;
				$scope.tables = response.data;
			});
		}


		$scope.remove = function(id){
			table.remove({id},function(data){
				humane.log(data.message);
				pagination(1);
			},function(){
				humane.log("Erro por favor tente mais tarde.");
			});
		}

	}]);

	module.controller('tablesEditController',['$scope', 'table', '$routeParams', function($scope, table, $routeParams) {
		var id = $routeParams.id;
		$scope.form = {};

		table.get({ id : id } ,function(data){
			$scope.form = data;
			$scope.photo = data.photo;
		});


		$scope.save = function(form){
			if(form.$valid){
				table.update({id},$scope.form,successResponse,errorResponse);
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

	module.controller('tablesNewController',['$scope', 'table', 'errors', '$location', function($scope, table, errors, $location) {
		$scope.form = {};

		$scope.save = function(form){
			if(form.$valid){
				var tableNew = new table($scope.form);
				tableNew.$save(successResponse,errorResponse);
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

})(angular.module('tables'));