angular.module('stats', ['map'])

.config(function($stateProvider, $urlRouterProvider){
	// $urlRouterProvider.otherwise('/');

	$stateProvider
		.state('stats', {
			url: '/stats',
			controller: 'StatsCtrl',
			controllerAs: 'vm',
			templateUrl: 'app/stats/stats.tpl.html',
		})

});