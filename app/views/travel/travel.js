'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/travel', {
    templateUrl: 'travel/travel.html',
    controller: 'View2Ctrl',
    controllerAs: 'vm'
  });
}]);
