'use strict';

// Declare app level module which depends on views, and components

var drugLord = angular.module('drugLord', ['ngRoute']);

drugLord.controller('gameController',['$scope','drugCityService','warehouseService','actionService','playerService','placeService',function($scope,dcs,whs,acs,play,place){
    
    $scope.newGameBtn = true;
    $scope.quitButton = false;
    $scope.gameStarted = false;

    $scope.startNewGame = function() {

        //initialize player
        play.init();

        setupPlayer();
        //setupPlayer();

        //initialize Market
        $scope.start = dcs.initMarket();
        setupMarket();

        //remove new game button
        //$scope.newGameBtn = false;
        var startBtn = document.getElementById("start");
        startBtn.innerHTML = "Restart";
        startBtn.className = "btn btn-warning col-xs-5"
        $scope.gameStarted = true;
        $scope.quitButton = true;
        $scope.storInventory=place.initInventory;
        console.log( $scope.storInventory);
    };
    $scope.bankOperation = function(){
        var op=document.getElementsByName("operation");
            if(op[0].checked)
            {
               var cash=parseInt(document.getElementById("ammount").value);
               if((cash <= play.cash) && (cash >= 0))
               {
                   play.cash-=cash;
                   play.bank+=cash;
               }
               else
               {
                  window.alert("enter valid ammount");
               }    
            }
            else if(op[1].checked)
            {
                var cash=parseInt(document.getElementById("ammount").value);
                 if((cash <= play.bank) && (cash >= 0))
               {
                   play.cash+=cash;
                   play.bank-=cash;
               }
               else
               {
                  window.alert("enter valid ammount");
               }    
            }
    };
    $scope.payLone=function(){
       if(play.cash >= play.debt)
       {
        play.cash-=play.debt;
        play.debt-=play.debt;
       }
    };

    $scope.endGame = function() {
        var storage = window.localStorage;
        storage.setItem('DrugLordScore',""+play.name+","+play.cash);

        var injector = angular.injector();
        injector.invoke(['$rootScope',function($rootScope){
            $rootScope.$apply(function() {
                $rootScope.templateUrl = null;
            });
        }]);

        injector.get('$browser').destroy();
        injector = null;
        var host = document.getElementById('container');
        var parent = host.parentNode;
        angular.element(host).remove();
        angular.element(parent).append(host);

        console.log(storage);
    };

    //drugCity Service
    var setupMarket = function() {
        $scope.drugs = dcs.drugs;
        //console.log(dcs.drugs);
        //console.log($scope);
        // console.log(play.cash);
        $scope.newGameBtn = false;
    };
    //console.log($scope);
    
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

    var setupPlayer = function() {
        $scope.playerName = play.name;
        $scope.playerCash = play.cash;
        $scope.playerBank = play.bank;
        $scope.playerDebt = play.debt;
        $scope.playerHealth = play.health;
        $scope.playerRank = play.rank;
        $scope.playerDays = play.dayCount;
        $scope.playerDaysLeft = play.day;
        $scope.pocketSize = play.pocket;

    };
    //place service
    $scope.selectedSellInvItem=place.selectInvItem;
    $scope.buyArray=place.buyItems;
    $scope.buyInventoryItem=place.buyItem;
    $scope.sellBuyInvItem=place.sellItem;
    $scope.selectedBuyInvItems=place.selectedBuyInvItems;

    //watch functions
    $scope.$watch(function($scope){
            console.log("player setup function watched");
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