(function() {
    'use strict';

    angular
        .module('admin')
        .directive('stat', stat);

    /* @ngInject */
    function stat () {
        // Usage:
        //	<stat model="json"></stat>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'E',
        	replace: true,
        	templateUrl: 'app/admin/stat.tpl.html',
            scope: {
            	model: '=',
            	key: '=',
            	status: '@'
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	var icons = {
                cpuUsage: 'fa-desktop',
                memoryUsage: 'fa-money',
                queueSize: 'fa-stack-exchange'
            };

            scope.icon = icons[scope.key];
            scope.$watch('model', function(n,o){
        		update(n);
        	});

        	function update (val) {
	        	if(val > 85){
	        		scope.status = 'red';
	        	}
                if (val > 50 && val < 85) {
                    scope.status = 'warning';
                }

                if (val > 10 && val < 50) {
                    scope.status = 'info';
                }
        	}
        }
    }
})();