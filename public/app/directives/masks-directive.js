(function (module) {
    'use strict';

    module.directive('money', function () {
        return {
            restrict: 'A',
            link: function (scope, element) {
                $(element).maskMoney('destroy').maskMoney({
                    thousands : '.',
                    decimal : ',',
                    allowZero: false
                });
            }
        };
    });

    module.directive('moneyBr', function () {
        return {
            restrict: 'EA',
            scope : {
                val : '='
            },
            replace : true,
            template : '<div>{{val}}</div>',
            link: function (scope, element) {
                scope.$watch('val',function(){
                    element.mask("#.##0,00", {reverse: true});
                });
            }
        };
    });

    module.directive('time', function () {
        return {
            restrict: 'A',
            link: function (scope, element) {
                $(element).mask("009", {reverse: true});
            }
        };
    });

})(angular.module('masks-directive', []));