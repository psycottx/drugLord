'use strict';

// Declare app level module which depends on views, and components

var drugLord = angular.module('drugLord', ['ngRoute','market','wareHouse','action']);

drugLord.controller('gameController',['$scope','drugCityService','warehouseService','actionService',function(scope,dcs,whs,acs){
    scope.start = dcs.start;
    scope.startNewGame = dcs.startNewGame;
    scope.drugs = dcs.drugs;
    scope.selectedDrug = dcs.selectedDrug;
    console.log(scope.selectedDrug);
    scope.sellDrug=acs.sellDrug;
    scope.selectedDrugWareHouse=whs.selectedDrugWareHouse;
    scope.drugName=whs.drugName;
    scope.price=whs.price;
    scope.quantity=whs.quantity;
    scope.buyDrug=acs.buyDrug;
}]);