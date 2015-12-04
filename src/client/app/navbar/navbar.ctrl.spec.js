describe('Controllers: navbar', function(){
  var controller, scope, navbarCtrl;

  beforeEach(function(){
    module('navbar');
    inject(function($controller, $rootScope, _navbarCtrl_) {
      // use window.mocks['name.of.mock.json'] for json mocks
      scope = $rootScope.$new();
      controller = $controller('navbarCtrl as vm', {
        $scope: scope
      });
      navbarCtrl = _navbarCtrl_
    });

  });

  // un"x" the describe and it 
  xdescribe('navbar actions here...', function(){

    xit('should what it is supposed to do', function() {
      
    });

  });
});