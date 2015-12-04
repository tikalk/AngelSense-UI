describe('Controllers: list', function(){
  var controller, scope, listCtrl;

  beforeEach(function(){
    module('list');
    inject(function($controller, $rootScope, _listCtrl_) {
      // use window.mocks['name.of.mock.json'] for json mocks
      scope = $rootScope.$new();
      controller = $controller('listCtrl as vm', {
        $scope: scope
      });
      listCtrl = _listCtrl_
    });

  });

  // un"x" the describe and it 
  xdescribe('list actions here...', function(){

    xit('should what it is supposed to do', function() {
      
    });

  });
});