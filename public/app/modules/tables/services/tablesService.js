(function(module){
	'use strict';

	module.service('table',['$resource', function($resource){
		return $resource("/api/tables/:id",{},{
			'query': {method: 'GET', isArray: false },
			 update: {method: 'PUT'}
		});
	}]);

})(angular.module('tables'));