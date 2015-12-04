(function() {
    'use strict';

    angular
        .module('map')
        .factory('attacks', attacks);

    /* @ngInject */
    function attacks($http, $interval) {
    	var items = [];
        var _interval;
        var service = {
            check: check,
            items: items,
            start: start,
            pause: pause,
            resume: resume,
            isOn: isOn
        };

        return service;

        ////////////////

        function start () {
            if (angular.isDefined(_interval)){
                return;
            }
        	_interval = $interval(check, 2000);
        }
        function check() {
        	return $http.get('/api/stats').then(function(res){
        		items.length = 0;
        		res.data.forEach(function (item) {
        			item.lon = item.longitude;
                    item.lat = item.latitude;
                    item.projection = 'EPSG:4326';
                    item.name = item.userId;
                    items.push(item);
        		});
        	});
        }

        function pause () {
            $interval.cancel(_interval);
            _interval = undefined;
        }

        function resume(){
            start();
        }

        function isOn () {
            return angular.isDefined(_interval);
        }
    }
})();