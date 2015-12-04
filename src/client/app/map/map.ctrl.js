/**
 * Created by naor on 2/24/15.
 */
 (function () {
  'use strict';

  angular
  .module('map')
  .controller('MapCtrl', MapCtrl);

function MapCtrl (attacks, MapRenderer) {
    var vm = this;
    vm.map = MapRenderer.map;
    vm.mapProps = {
      zoom: 6,
      center: {lat: 41.85, lng: -87.65}
    };

    vm.currentAttack = {
      lat: 40,
      lon: 36,
      zoom: 3,
      projection: 'EPSG:4326',
    };

    vm.markers = attacks.items;
    vm.saveMap = saveMap;
    activate();

    function activate () {

    }

    function saveMap (map) {
      
    }
}
})();