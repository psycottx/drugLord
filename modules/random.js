'use strict';

var random = angular.module('randomMod',[]);

random.service('randomService',function(){
	this.randomPrice = function(limit) {
		return (Math.random()*limit);
	};
});
