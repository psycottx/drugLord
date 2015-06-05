'use strict';

// Declare app level module which depends on views, and components

var drugLord = angular.module('drugLord', ['ngRoute','market','wareHouse','action']);

drugLord.controller('gameController',['$scope','drugCityService','warehouseService','actionService',function(scope,dcs,whs,acs){
    // market service
    scope.start = dcs.start;
    scope.startNewGame = dcs.startNewGame;
    scope.drugs = dcs.drugs;
    scope.selectedDrug = dcs.selectedDrug;
    console.log(scope.selectedDrug);
    // warehouse service
    scope.selectedDrugWareHouse=whs.selectedDrugWareHouse;
    scope.whdrugs=whs.whdrugs;
    // action service
    scope.buyDrug=acs.buyDrug;
    scope.sellDrug=acs.sellDrug;
    scope.dumpDrug=acs.dumpDrug;
}]);