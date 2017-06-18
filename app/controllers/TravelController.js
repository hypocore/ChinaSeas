'use strict';

angular.module('myApp.view2')
.controller('TravelController', ['$scope',
                            '$rootScope',
                            function($scope,
                                    $rootScope) {

    var vm = this;

    angular.extend(vm, {
        example: '',
        example2: 0,
        buyProduct: buyProduct
    });

    function buyProduct(product){

    }

}]);
