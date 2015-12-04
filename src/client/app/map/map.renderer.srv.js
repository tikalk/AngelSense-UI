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
            calculateAndDisplayRoute: calculateAndDisplayRoute,
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
        function calculateAndDisplayRoute(/*directionsService, directionsDisplay*/) {
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

        	directionsService.route({
        		origin: document.getElementById('start').value,
        		destination: document.getElementById('end').value,
        		waypoints: waypts,
        		optimizeWaypoints: true,
        		travelMode: google.maps.TravelMode.DRIVING
        	}, function(response, status) {
        		if (status === google.maps.DirectionsStatus.OK) {
        			directionsDisplay.setDirections(response);
        			var route = response.routes[0];
        			var summaryPanel = document.getElementById('directions-panel');
        			summaryPanel.innerHTML = '';
			      // For each route, display summary information.
			      for (var i = 0; i < route.legs.length; i++) {
			      	var routeSegment = i + 1;
			      	summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
			      	'</b><br>';
			      	summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
			      	summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
			      	summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
			      }
			  } else {
			  	window.alert('Directions request failed due to ' + status);
			  }
			});
		}
    }
})();