'use strict';

var player = angular.module('player',[]);

player.service('playerService',[function() {
	var scope = this;
	scope.name = '';

	scope.init = function() {
		scope.name = window.prompt('Please enter your name.');
	}
}]);