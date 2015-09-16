(function(module){
	'use strict';

	module.config(function($routeProvider) {
		$routeProvider.when('/produtos', {
	      templateUrl: "app/modules/products/views/products.html",
	      controller : 'productsController'
	    })
	    .when('/produtos/novo', {
	      templateUrl: "app/modules/products/views/product-new.html",
	      controller : 'productsNewController'
	    })
	    .when('/produtos/:id/editar', {
	      templateUrl: "app/modules/products/views/product-edit.html",
	      controller : 'productsEditController'
	    });
	});	

})(angular.module('products',['upload-directive']));