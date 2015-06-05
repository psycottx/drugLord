'use strict';

// Declare app level module which depends on views, and components

var drugLord = angular.module('drugLord', ['ngRoute','market','wareHouse','action','player']);

drugLord.controller('gameController',['$scope','drugCityService','warehouseService','actionService','playerService',function($scope,dcs,whs,acs,play){
    
    $scope.newGameBtn = true;

    //drugCity Service
    $scope.startNewGame = function() {

        play.init();
        setupPlayer();
        $scope.start = dcs.initMarket();
        $scope.drugs = dcs.drugs;
        console.log(dcs.drugs);
        console.log($scope);
        $scope.newGameBtn = false;
    };
    console.log($scope);
    
    $scope.selectedDrug = dcs.selectedDrug;


    //action service
    $scope.sellDrug=acs.sellDrug;
    $scope.buyDrug=acs.buyDrug;
    $scope.dumpDrug = acs.dumpDrug;
    

    //warehouse Service
    $scope.selectedDrugWareHouse=whs.selectedDrugWareHouse;
    $scope.drugName=whs.drugName;
    $scope.price=whs.price;
    $scope.quantity=whs.quantity;
    $scope.whdrugs = whs.whdrugs;


    //playerService
    function setupPlayer() {
        $scope.playerName = play.name;
    }
}]);