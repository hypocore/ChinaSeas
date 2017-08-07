'use strict';

angular.module('myApp.dockArea', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/port', {
    templateUrl: 'views/port/port.html'
  });
}]);
