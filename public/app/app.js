(function(module){
	'use strict';

	module.config(function($routeProvider) {
		$routeProvider.otherwise({redirectTo : "/404"});
	});	

    module.run(['$rootScope', '$location', function ($rootScope, $location) {
        $rootScope.user = {};
        $rootScope.location = $location;

        $rootScope.isinvalidField = function (form, field) {
            return form.$submitted && form[field].$invalid || form[field].$touched && form[field].$invalid;
        }
    }]);

})(angular.module('fastorder',['ngRoute','ngResource','ngCookies','home','products','menus','tables','masks-directive','formatService','bw.paging']));