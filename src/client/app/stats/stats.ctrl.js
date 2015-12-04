(function() {
    'use strict';

    angular
        .module('stats')
        .controller('StatsCtrl', StatsCtrl);

    /* @ngInject */
    function StatsCtrl(machine) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'StatsCtrl';
        vm.machine = machine.stats;
        activate();

        function activate() {
            machine.start();
        }
    }
})();
