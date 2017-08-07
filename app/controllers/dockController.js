'use strict';

angular.module('myApp.dockArea')
.controller('dockController', ['$scope',
                            '$rootScope',
                            'dockFactory',
                            function($scope,
                                    $rootScope,
                                    dockFactory) {

    var vm = this;

    angular.extend(vm, {
        dockGoods: {},
        example: '',
        example2: 0,
        init: init
    });

    init();

    function init(){
      console.log('dock controller initialized');
      // fetch the json data here, but it's the wrong time to get it.
      vm.dockGoods = dockFactory.getPortGoods();
    }

}]);
