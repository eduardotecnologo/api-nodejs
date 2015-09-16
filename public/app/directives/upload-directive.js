(function (module) {
	'use strict';

	var html = [
	'<div>',
	'<input type="file" name="upload" valid-file class="form-control" ng-model="success" required>',
	'<br />',
	'{{image}}',
	'<img ng-if="success && success.indexOf(\'https\') != -1" ng-src="{{success}}" class="preview-image thumbnail" alt="" />',
	'<p ng-if="isUploading">',
	'<br />',
	'<i class="fa fa-cog fa-spin"></i>&nbsp;',
	'Fazendo upload do arquivo...',
	'</p>',
	'</div>'
	].join('');

	module.directive('upload',['$cookies', function ($cookies) {
		return {
			restrict: 'E',
			scope : {
				success : '='
			},
			template : html,
			link: function (scope, element, attr) {
				scope.isUploading = false;
				var input = $(element).find('input[type=file]');

				input.on('change',function(){
					var formData = new FormData();
					formData.append('photo',this.files[0]);

					var publicId = (scope.$parent.photo) ? scope.$parent.photo.split('/').slice(-1)[0].split('.')[0] : undefined;

					if(publicId){
						removeImage(publicId);
					}

					upload(formData);
				});

				function removeImage(id){
					$.ajax({
						url : '/api/upload/'+ id,
						method : 'DELETE',
						dataType: 'json',
				        processData: false, // Don't process the files
				        contentType: false, // Set content type to false as jQuery will tell the server its a query string request
				        beforeSend : function(xhr){
				        	xhr.setRequestHeader('X-XSRF-TOKEN',$cookies.get('XSRF-TOKEN'));
				        }
				    });
				}


				function upload(formData){
					$.ajax({
						url : '/api/upload',
						method : 'POST',
						dataType: 'json',
				        processData: false, // Don't process the files
				        contentType: false, // Set content type to false as jQuery will tell the server its a query string request
				        data : formData,
				        beforeSend : function(xhr){
				        	scope.isUploading = true;
				        	scope.$apply();
				        	xhr.setRequestHeader('X-XSRF-TOKEN',$cookies.get('XSRF-TOKEN'));
				        },
				        success : function(data){
				        	scope.success = data;
				        	scope.previewImage = data;
				        	scope.isUploading = false;
				        	input.val('');
				        	scope.$apply();
				        },
				        error : function(responseError){
				        	scope.isUploading = false;
				        	input.val('');
				        	scope.$apply();
				        	humane.log(responseError.data);	
				        }
				    });
				}

			}
		}
	}]);

module.directive('validFile',function(){
	return {
		require:'ngModel',
		link:function(scope,el,attrs,ngModel){
			el.bind('change',function(){
				scope.$apply(function(){
					ngModel.$setViewValue(el.val());
					ngModel.$render();
				});
			});
		}
	}
});


})(angular.module('upload-directive', []));