'use strict';

var player = angular.module('player',[]);

player.service('playerService',[function() {
	var scope = this;
	var index = 0;
	scope.name = '';
	scope.cash = 1990;
	scope.bank = 0;
	scope.debt = 1000;
	scope.health = 100;

	scope.ranks = ['Wannabe','Small Time Operator','Dealer','Big Time Dealer','Distributor'];
	scope.days = [30,35,40,45,50];
	scope.pockets = [10,25,100,600,2000];

	scope.rank = scope.ranks[index];
	scope.days = scope.days[index];
	scope.pocket = scope.pockets[index];

	scope.init = function() {
		scope.name = window.prompt('Please enter your name.');
	};

	if(scope.cash < 40000) {
		index = 0;
	} else if (scope.cash < 100000) {
		index =1;
	} else if (scope.cash < 500000) {
		index = 2;
	} else if (scope.cash < 1000000) {
		index = 3;
	} else if (scope.cash < 2000000) {
		index = 4;
	}

}]);