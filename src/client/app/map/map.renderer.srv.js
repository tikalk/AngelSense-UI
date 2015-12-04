(function() {
    'use strict';

    angular
        .module('map')
        .factory('MapRenderer', MapRenderer);

    /* @ngInject */
    function MapRenderer() {
    	var map = {};
    	var directionsService = {};
    	var directionsDisplay = {};
        var service = {
            renderRoute: renderRoute,
            setMap: setMap,
            map: map
        };
        return service;

        ////////////////
        function setMap (map) {
        	directionsService = map.directionsService;
        	directionsDisplay = map.directionsDisplay;
        }

        // copied from 
        // https://developers.google.com/maps/documentation/javascript/examples/directions-waypoints
        function renderRoute(start, end /*directionsService, directionsDisplay*/) {
        	var waypts = [];
        	// var checkboxArray = document.getElementById('waypoints');
        	// for (var i = 0; i < checkboxArray.length; i++) {
        	// 	if (checkboxArray.options[i].selected) {
        	// 		waypts.push({
        	// 			location: checkboxArray[i].value,
        	// 			stopover: true
        	// 		});
        	// 	}
        	// }

        	map.directionsService.route({
        		origin: start,
        		destination: end,
        		waypoints: waypts,
        		optimizeWaypoints: true,
        		travelMode: google.maps.TravelMode.DRIVING
        	}, onRouteReady);

        	function onRouteReady (response, status) {
        		if (status === google.maps.DirectionsStatus.OK) {
        			map.directionsDisplay.setDirections(response);
			    }
			}
		}
    }
})();