/**
 * Created by naor on 2/24/15.
 */
(function() {
  'use strict';

  angular.module('map', [])

  .config(function($stateProvider, $urlRouterProvider){
	// $urlRouterProvider.otherwise('/');

	$stateProvider
		.state('map', {
			url: '/map',
			controller: 'MapCtrl',
			controllerAs: 'vm',
			templateUrl: 'app/map/map.tpl.html',
		})

});


})();