(function(module){
	'use strict';

	module.service('money',function(){
		this.formatToDatabase = function(value){
			if(value && value.indexOf(",") > -1){
				return value.replace('.','').replace(',','.');
			}
			if(value){
				return value;
			}
			return 0.00;
		};
	});

	module.service('errors',function(){
		this.formatToHuman = function(errors){
			var messages = [];
			for(var error in errors){
				messages.push(errors[error]);
			}
			return messages;
		};
	});

})(angular.module('formatService',[]));