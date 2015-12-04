(function() {
	angular.module('sidebar')
	.controller('SidebarCtrl', SidebarCtrl);

	/* @ngInject */
	function SidebarCtrl($scope, $http, $state){
		var vm = this;
		vm.screen = '';
		vm.items = [
			{ label: 'Dashboard', icon: 'fa-dashboard fa-fw', sref : 'map' },
			{ label: 'Server Stats', icon: 'fa-list', sref : 'stats'}
		];
		vm.isItemActive = isItemActive;

		function isItemActive (item, index) {
			return item.active && $state.includes(item.sref);
		}
	}
})();