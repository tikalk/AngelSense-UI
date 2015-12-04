(function() {
    'use strict';

    angular
        .module('navbar')
        .controller('NavbarCtrl', NavbarCtrl);

    /* @ngInject */
    function NavbarCtrl(attacks) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'NavbarCtrl';
        vm.pause = attacks.pause;
        vm.resume = attacks.resume;
        vm.isOn = attacks.isOn;

        activate();

        function activate() {
        }
    }
})();
