'use strict';

angular.module('myApp.portArea')
.controller('PortController', ['$scope',
                            '$rootScope',
                            'portFactory',
                            function($scope,
                                    $rootScope,
                                    portFactory) {

    var vm = this;

    angular.extend(vm, {
        portGoods: {},
        example: '',
        example2: 0,
        init: init
    });

    init();

    function init(){
      console.log('port controller initialized');
      // fetch the json data here, but it's the wrong time to get it.
      vm.portGoods = portFactory.getPortGoods();
    }

}]);
