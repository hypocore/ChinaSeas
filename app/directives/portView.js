angular.module('myApp.dockArea')
.directive("portView", ['$timeout', function($timeout){
  return {
    restrict: 'A',
    link: link,
    controller: 'dockController',
    controllerAs: 'vm'

    }

    function link(scope, element, attrs, ctrl){
      console.log('Port directive initialized');
    }
}]);
