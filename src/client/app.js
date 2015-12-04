angular.module('ki', [
	'ui.router',
	'ui.bootstrap',
	'http-auth-interceptor',
	'login',
	'sidebar',
  'map',
	'ki.directives',
	'htmlTemplates',
	'ki.resources',
	'angular-jwt',
	'angular-storage',
  'ngSanitize',
  'openlayers-directive',
  'admin',
  'list',
  'stats',
  'navbar'
])

.run(function(){
	// initialize providers here 
})

.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/map');

	// $stateProvider
	// 	.state('', {
	// 		url: '/home',
	// 		controller: 'CampaignCtrl',
	// 		controllerAs: 'vm',
	// 		templateUrl: 'app/campaign/campaign.tpl.html',
	// 	})

});
