'use strict';

//var random = angular.module('randomMod',[]);

drugLord.service('randomService',function(){
	this.randomPrice = function(limit) {
		return (Math.random()*limit);
	};
});
