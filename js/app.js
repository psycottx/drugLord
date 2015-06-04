'use strict';

// Declare app level module which depends on views, and components
var drugLord = angular.module('drugLord', ['ngRoute','market']);

drugLord.controller('gameController',['$scope','drugCityService',function(scope,dcs){
    scope.start = dcs.start;
    scope.startNewGame = dcs.startNewGame;
    scope.drugs = dcs.drugs;
    scope.selectedDrug = dcs.selectedDrug;
    console.log(scope.selectedDrug);
}]);

