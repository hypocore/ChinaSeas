'use strict';

describe('myApp.port module', function() {

  beforeEach(module('myApp.port'));

  var scope;
  var rootScope;
  var view2Ctrl;
  var $httpBackend, requestHandler;
  var $q;
  beforeEach(inject(function($rootScope, $controller, _$q_){

    rootScope = $rootScope;
    scope = $rootScope.$new();
    $q = _$q_;

    view2Ctrl = $controller('PortController', {$scope: scope});

  }));

  describe('Calling a function that requires a factory', function(){

  // End factory describe
  });

});
