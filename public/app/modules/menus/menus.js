(function(module){
	'use strict';

	module.config(function($routeProvider) {
		$routeProvider.when('/cardapios', {
	      templateUrl: "app/modules/menus/views/menus.html",
	      controller : 'menusController'
	    })
	    .when('/cardapios/novo', {
	      templateUrl: "app/modules/menus/views/menu-new.html",
	      controller : 'menusNewController'
	    })
	    .when('/cardapios/:id/editar', {
	      templateUrl: "app/modules/menus/views/menu-edit.html",
	      controller : 'menusEditController'
	    });
	});	

})(angular.module('menus',[]));