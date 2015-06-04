'use strict';
var marketMod = angular.module('market',[]);

marketMod.service('drugCityService', function(){
    var mark = this;
    mark.drugs = [
        {
            name:"Cocaine",
            qty : 0,
            price: 0,
            selected : false
        },
        
        {
            name:"Crack",
            qty : 0,
            price: 0,
            selected : false
        },
        
        {
            name:"Ecstacy",
            qty : 0,
            price: 0,
            selected : false
        },
        
        {
            name:"Hashish",
            qty : 0,
            price: 0,
            selected : false
        },
        
        {
            name:"Heroin",
            qty : 0,
            price: 0,
            selected : false
        },
        
        {
            name:"Ice",
            qty : 0,
            price: 0,
            selected : false
        },
        
        {
            name:"KAT",
            qty : 0,
            price: 0,
            selected : false
        },
        
        {
            name:"LSD",
            qty : 0,
            price: 0,
            selected : false
        },
        
        {
            name:"MDA",
            qty : 0,
            price: 0,
            selected : false
        },
        
        {
            name:"Morphine",
            qty : 0,
            price: 0,
            selected : false
        },
        
        {
            name:"Mushrooms",
            qty : 0,
            price: 0,
            selected : false
        },
        
        {
            name:"Opium",
            qty : 0,
            price: 0,
            selected : false
        },
        
        {
            name:"PCP",
            qty : 0,
            price: 0,
            selected : false
        },
        
        {
            name:"Peyote",
            qty : 0,
            price: 0,
            selected : false
        },
        
        {
            name:"Pot",
            qty : 0,
            price: 0,
            selected : false
        },
        
        {
            name:"Special K",
            qty : 0,
            price: 0,
            selected : false
        },
        
        {
            name:"Speed",
            qty : 0,
            price: 0,
            selected : false
        }
    ];
    mark.cities = ["Austin, USA", "Beijing, China", "Boston, USA", "Detroit, USA", "London, England", "Los Angeles, USA", "Miami, USA", "Moscow, Russia", "New York, USA", "Paris, France", "San Francisco, USA", "St. Peteresburg, Russia", "Sydney, Australia", "Toronto, Canada", "Vancouver, Canada"];

    mark.start = false;
    
    mark.startNewGame = function() {
        mark.start = true;
        return true;
    };

    mark.prevTarget = [];
    mark.selectedDrug = function(e,index) {
        var flag=0;
        if(mark.prevTarget.length < 1) {
            mark.prevTarget.push(e.currentTarget);
            e.currentTarget.className="list-group-item active";
        } else if(isNotPrevObj(e.currentTarget)){
            for (var i = 0, n=mark.prevTarget.length; i < n; i++) {
                mark.prevTarget[i].className = "list-group-item";
            };
            mark.prevTarget.push(e.currentTarget);
            e.currentTarget.className = "list-group-item active";
        } else if(!isNotPrevObj(e.currentTarget)) {
            e.currentTarget.className = "list-group-item active";
            for (var i = 0, n=mark.prevTarget.length; i < n; i++) {
                if(mark.prevTarget[i] == e.currentTarget) {
                    continue;
                } else {
                    mark.prevTarget[i].className = "list-group-item";
                }
            };
        }
        for(var i=0; i < mark.drugs.length; i++) {
            mark.drugs[i].selected = false;
        }
        mark.drugs[index].selected = true;

        console.log(mark.drugs);
        console.log(mark.start);
        
    };

    function isNotPrevObj(objec) {
        for(var i=0, n = mark.prevTarget.length; i < n; i++) {
            if(mark.prevTarget[i] == objec) {
                return false;
            }
        }
        return true;
    }

});

/*
marketMod.controller('marketController',['$scope','drugCityService',function(scope,dcs){
	scope.start = false;
    scope.drugs = dcs.drugs;
    
    scope.startNewGame = function() {
        scope.start = false;
        scope.start = true;
    };

    scope.prevTarget = [];
    scope.selectedDrug = function(e) {
        var flag=0;
        if(scope.prevTarget.length < 1) {
            scope.prevTarget.push(e.currentTarget);
            e.currentTarget.className="list-group-item active";
        } else if(isNotPrevObj(e.currentTarget)){
            for (var i = 0, n=scope.prevTarget.length; i < n; i++) {
                scope.prevTarget[i].className = "list-group-item";
            };
            scope.prevTarget.push(e.currentTarget);
            e.currentTarget.className = "list-group-item active";
        } else if(!isNotPrevObj(e.currentTarget)) {
            e.currentTarget.className = "list-group-item active";
            for (var i = 0, n=scope.prevTarget.length; i < n; i++) {
                if(scope.prevTarget[i] == e.currentTarget) {
                    continue;
                } else {
                    scope.prevTarget[i].className = "list-group-item";
                }
            };
        }
        
    };

    function isNotPrevObj(objec) {
        for(var i=0, n = scope.prevTarget.length; i < n; i++) {
            if(scope.prevTarget[i] == objec) {
                return false;
            }
        }
        return true;
    }
}]);

*/