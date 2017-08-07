'use strict';

describe('myApp.dockArea module', function() {

  beforeEach(module('myApp.dockArea'));

  var scope;
  var rootScope;
  var view2Ctrl;
  var $httpBackend, requestHandler;
  var $q;
  var dockController;
  beforeEach(inject(function($rootScope, $controller, _$q_){

    rootScope = $rootScope;
    scope = $rootScope.$new();
    $q = _$q_;

    dockController = $controller('dockController', {$scope: scope});

  }));

  describe('PortController on init', function(){
    it('should exist', function(){
      expect(dockController).toBeDefined();
    })
    // it('should request backend data from port factory if the location is new', function(){
    //
    // });
  // End factory describe
  });



});
