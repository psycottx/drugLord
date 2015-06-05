'use strict';
var marketMod = angular.module('market',['randomMod']);

marketMod.service('drugCityService',['randomService','$log', function(rS,$log){
    var mark = this;
    mark.initDrugs = function() {
    return [
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

    };   
    mark.cities = ["Austin, USA", "Beijing, China", "Boston, USA", "Detroit, USA", "London, England", "Los Angeles, USA", "Miami, USA", "Moscow, Russia", "New York, USA", "Paris, France", "San Francisco, USA", "St. Peteresburg, Russia", "Sydney, Australia", "Toronto, Canada", "Vancouver, Canada"];

    mark.drugs = [];
    mark.indexes = [];
    mark.drugs1 = [];
    
    mark.initMarket = function() {
        mark.drugs1 = mark.initDrugs();
        mark.size = Math.round(rS.randomPrice(17));
        while(mark.size < 7) {
            mark.size = Math.round(rS.randomPrice(17));
        }
        for(var i=0; i < mark.size; i++) {
            var j = Math.round(rS.randomPrice(16)), flag=0;
            for(var k = 0; k < mark.indexes.length; k++) {
                if(mark.indexes[k] == j) {
                    j = Math.round(rS.randomPrice(16));
                    k=-1;
                }
            }
            mark.indexes.push(j);
        }
        mark.indexes.sort();
        for(var i=0; i < mark.size; i++) {
            mark.drugs.push(mark.drugs1[mark.indexes[i]]);
        }
        console.log(mark.indexes);
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
        } else if(mark.prevTarget == e.currentTarget) {
            if(e.currentTarget.className == "list-group-item active") {
                 e.currentTarget.className = "list-group-item";
                mark.drugs[index].selected = false;
            } else {
                 e.currentTarget.className = "list-group-item active";
                mark.drugs[index].selected = true;
            }
        }
        else {
            mark.prevTarget.className="list-group-item";
            e.currentTarget.className="list-group-item active";
            mark.prevTarget = e.currentTarget;
        }
    };

}]);