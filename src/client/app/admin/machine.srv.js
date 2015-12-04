(function() {
    'use strict';

    angular
        .module('admin')
        .factory('machine', machine);

    /* @ngInject */
    function machine($http, $interval) {
    	var stats = {};
        var service = {
            start: start,
            stats: stats
        };
        return service;

        ////////////////

        function start () {
        	$interval(check, 5000);
        }

        function check() {
        	return $http.get('/api/admin').then(function(res){
        		var data = res.data;
        		Object.keys(data).forEach(function(key){
        			stats[key] = data[key];
        		});
        	});
        }
    }
})();