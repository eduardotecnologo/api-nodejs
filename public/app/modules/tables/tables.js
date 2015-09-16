(function(module){
	'use strict';

	module.config(function($routeProvider) {
		$routeProvider.when('/mesas', {
	      templateUrl: "app/modules/tables/views/tables.html",
	      controller : 'tablesController'
	    })
	    .when('/mesas/novo', {
	      templateUrl: "app/modules/tables/views/table-new.html",
	      controller : 'tablesNewController'
	    })
	    .when('/mesas/:id/editar', {
	      templateUrl: "app/modules/tables/views/table-edit.html",
	      controller : 'tablesEditController'
	    });
	});	

})(angular.module('tables',[]));