(function(module){
	'use strict';

	module.config(function($routeProvider) {
		$routeProvider.when('/', {
	      templateUrl: "app/modules/home/views/home.html",
	      controller : 'homeController'
	    })
	});	

})(angular.module('home',[]));