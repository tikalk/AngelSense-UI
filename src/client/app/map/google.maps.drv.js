(function() {
    'use strict';

    angular
        .module('map')
        .directive('googleMaps', googleMaps);

    /* @ngInject */
    function googleMaps () {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	config: '=',
            	onReady: '&',
            	map: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	// create map only once?
        	if (!Object.keys(scope.map).length) {
	        	scope.map.directionsService = new google.maps.DirectionsService;
	        	scope.map.directionsDisplay = new google.maps.DirectionsRenderer;
	        	scope.map.map = new google.maps.Map(element[0], scope.config);
	        	scope.map.directionsDisplay.setMap(scope.map.map);
	        	scope.onReady({ map: scope.map });
        	}
        }
    }
})();