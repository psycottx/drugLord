'use strict';

// Declare app level module which depends on views, and components

var drugLord = angular.module('drugLord', ['ngRoute','market','wareHouse','action']);

drugLord.controller('gameController',['$scope','drugCityService','warehouseService','actionService',function($scope,dcs,whs,acs){
    
    //drugCityService
    //$scope.start = dcs.initMarket();
    //$scope.drugs = dcs.drugs;
    //console.log($scope.drugs);

    $scope.startNewGame = function() {
        $scope.start = dcs.initMarket();
        $scope.drugs = dcs.drugs;
        console.log(dcs.drugs);
        console.log($scope);
    };
    console.log($scope);
    
    $scope.selectedDrug = dcs.selectedDrug;


    //action service
    $scope.sellDrug=acs.sellDrug;
    $scope.buyDrug=acs.buyDrug;
    

    //warehouseService
    $scope.selectedDrugWareHouse=whs.selectedDrugWareHouse;
    $scope.drugName=whs.drugName;
    $scope.price=whs.price;
    $scope.quantity=whs.quantity;
    $scope.whdrugs = whs.whdrugs;
}]);