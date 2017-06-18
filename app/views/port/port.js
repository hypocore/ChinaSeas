'use strict';

angular.module('myApp.portArea', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/port', {
    templateUrl: 'views/port/port.html',
    controller: 'PortController',
    controllerAs: 'vm'
  });
}]);
