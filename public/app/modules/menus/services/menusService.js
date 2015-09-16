(function(module){
	'use strict';

	module.service('menu',['$resource', function($resource){
		return $resource("/api/menus/:id",{},{
			'query': {method: 'GET', isArray: false },
			'listAll': {method: 'GET', isArray: true, url : '/api/menus/list' },
			 update: {method: 'PUT'}
		});
	}]);

})(angular.module('menus'));