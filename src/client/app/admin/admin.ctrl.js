(function() {
    'use strict';

    angular
        .module('admin')
        .controller('AdminCtrl', AdminCtrl);

    /* @ngInject */
    function AdminCtrl(machine) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'AdminCtrl';
        vm.machine = machine.stats;
        activate();

        function activate() {
            machine.start();
        }
    }
})();
