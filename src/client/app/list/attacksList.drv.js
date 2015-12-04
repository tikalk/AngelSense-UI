(function() {
    'use strict';

    angular
        .module('list')
        .directive('attacksList', attacksList);

    /* @ngInject */
    function attacksList (attacks) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            controller: 'ListCtrl',
            controllerAs: 'vm',
            replace: true,
            templateUrl: 'app/list/list.tpl.html',
            restrict: 'AE'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
})();