describe('Controllers: admin', function(){
  var controller, scope, adminCtrl;

  beforeEach(function(){
    module('admin');
    inject(function($controller, $rootScope, _adminCtrl_) {
      // use window.mocks['name.of.mock.json'] for json mocks
      scope = $rootScope.$new();
      controller = $controller('adminCtrl as vm', {
        $scope: scope
      });
      adminCtrl = _adminCtrl_
    });

  });

  // un"x" the describe and it 
  xdescribe('admin actions here...', function(){

    xit('should what it is supposed to do', function() {
      
    });

  });
});