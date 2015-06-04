'use strict';
var marketMod = angular.module('market',['randomMod']);

marketMod.service('drugCityService',['randomService', function(rS){
    var mark = this;
    mark.drugs = [
        {
            name:"Cocaine",
            qty : Math.round(rS.randomPrice(10)),
            price: Math.round(rS.randomPrice(10000)),
            selected : false
        },
        
        {
            name:"Crack",
            qty : Math.round(rS.randomPrice(10)),
            price: Math.round(rS.randomPrice(10000)),
            selected : false
        },
        
        {
            name:"Ecstacy",
            qty : Math.round(rS.randomPrice(10)),
            price: Math.round(rS.randomPrice(10000)),
            selected : false
        },
        
        {
            name:"Hashish",
            qty : Math.round(rS.randomPrice(10)),
            price: Math.round(rS.randomPrice(10000)),
            selected : false
        },
        
        {
            name:"Heroin",
            qty : Math.round(rS.randomPrice(10)),
            price: Math.round(rS.randomPrice(10000)),
            selected : false
        },
        
        {
            name:"Ice",
            qty : Math.round(rS.randomPrice(10)),
            price: Math.round(rS.randomPrice(1000)),
            selected : false
        },
        
        {
            name:"KAT",
            qty : Math.round(rS.randomPrice(10)),
            price: Math.round(rS.randomPrice(1000)),
            selected : false
        },
        
        {
            name:"LSD",
            qty : Math.round(rS.randomPrice(10)),
            price: Math.round(rS.randomPrice(1000)),
            selected : false
        },
        
        {
            name:"MDA",
            qty : Math.round(rS.randomPrice(10)),
            price: Math.round(rS.randomPrice(1000)),
            selected : false
        },
        
        {
            name:"Morphine",
            qty : Math.round(rS.randomPrice(10)),
            price: Math.round(rS.randomPrice(1000)),
            selected : false
        },
        
        {
            name:"Mushrooms",
            qty : Math.round(rS.randomPrice(10)),
            price: Math.round(rS.randomPrice(1000)),
            selected : false
        },
        
        {
            name:"Opium",
            qty : Math.round(rS.randomPrice(10)),
            price: Math.round(rS.randomPrice(1000)),
            selected : false
        },
        
        {
            name:"PCP",
            qty : Math.round(rS.randomPrice(10)),
            price: Math.round(rS.randomPrice(1000)),
            selected : false
        },
        
        {
            name:"Peyote",
            qty : Math.round(rS.randomPrice(10)),
            price: Math.round(rS.randomPrice(1000)),
            selected : false
        },
        
        {
            name:"Pot",
            qty : Math.round(rS.randomPrice(10)),
            price: Math.round(rS.randomPrice(1000)),
            selected : false
        },
        
        {
            name:"Special K",
            qty : Math.round(rS.randomPrice(10)),
            price: Math.round(rS.randomPrice(1000)),
            selected : false
        },
        
        {
            name:"Speed",
            qty : Math.round(rS.randomPrice(10)),
            price: Math.round(rS.randomPrice(1000)),
            selected : false
        }
    ];
    mark.cities = ["Austin, USA", "Beijing, China", "Boston, USA", "Detroit, USA", "London, England", "Los Angeles, USA", "Miami, USA", "Moscow, Russia", "New York, USA", "Paris, France", "San Francisco, USA", "St. Peteresburg, Russia", "Sydney, Australia", "Toronto, Canada", "Vancouver, Canada"];

    mark.start = false;
    
    mark.startNewGame = function() {
        mark.start = true;
        return true;
    };
    mark.prevTarget = null;
    mark.selectedDrug = function(e,index) {
        for(var i=0; i < mark.drugs.length; i++) {
            mark.drugs[i].selected = false;
        }
        mark.drugs[index].selected = true;
        if(mark.prevTarget == null) {
            e.currentTarget.className="list-group-item active";
            mark.prevTarget = e.currentTarget;
        } else {
            mark.prevTarget.className="list-group-item";
            e.currentTarget.className="list-group-item active";
            mark.prevTarget = e.currentTarget;
        }
        
        console.log(mark.drugs);

    };

}]);