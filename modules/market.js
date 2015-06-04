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

});