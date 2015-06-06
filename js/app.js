'use strict';

// Declare app level module which depends on views, and components

var drugLord = angular.module('drugLord', ['ngRoute','market','wareHouse','action','player']);

drugLord.controller('gameController',['$scope','drugCityService','warehouseService','actionService','playerService',function($scope,dcs,whs,acs,play){
    
    $scope.newGameBtn = true;
    $scope.gameStarted = false;

    $scope.startNewGame = function() {

        //initialize player
        play.init();
        setupPlayer();

        //initialize Market
        $scope.start = dcs.initMarket();
        setupMarket();

        //remove new game button
        $scope.newGameBtn = false;
        $scope.gameStarted = true;
    };
    
    $scope.selectedDrug = dcs.selectedDrug;

    //drugCity Service
    var setupMarket = function() {
        $scope.drugs = dcs.drugs;
    };


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
    var setupPlayer = function() {
        $scope.playerName = play.name;
        $scope.playerCash = play.cash;
        $scope.playerBank = play.bank;
        $scope.playerDebt = play.debt;
        $scope.playerHealth = play.health;
        $scope.playerRank = play.rank;
        $scope.playerDays = play.days;

        console.log($scope.playerRank);
    };

    //pocketSize 
    $scope.pocketSize = play.pocket;

    //watch all function
    $scope.
    $watch(function($scope){
            //console.log("function watched");
            return play.cash;
        },function(newVal,oldVal){
            if($scope.gameStarted) {
                setupPlayer();
                console.log("called setupPlayer");
            }
    });
    $scope.$watch(function($scope){
            //console.log("function watched");
            return setupMarket;
        },function(newVal){
            if($scope.gameStarted) {
                newVal();
                console.log("called setupMarket");
            }
    });

}]);