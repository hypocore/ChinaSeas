angular.module('myApp')
.directive("portView", ['$timeout', function($timeout){
  return {
    restrict: 'A',
    link: link,
    controller: 'PortController',
    controllerAs: 'vm'

    }

    function link(scope, element, attrs, ctrl){
      console.log('Port directive initialized');
    }
}]);
