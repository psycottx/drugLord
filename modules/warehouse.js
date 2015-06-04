'use strict';
var pocket=angular.module('wareHouse',[]);
pocket.service('warehouseService',['drugCityService',function(dcs){
	var scope = this;
	scope.drugName='cocaine';
	scope.price='1000';
	scope.quantity='5';
	scope.sellDrugName= null;
	scope.sellPrice='';
	scope.sellquantity='';
	scope.wareHouseSize=10;

	scope.prevTarget = [];
    scope.selectedDrugWareHouse = function(e,d,p) {
        console.log(e,d,p);
        scope.sellDrugName = d;
        console.log(e.currentTarget );
        scope.sellPrice=p;
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
    scope.sellDrug = function(e){
    	console.log("inside sellDrug");
    	if(scope.sellDrugName != null)
    	{
    		console.log(scope.sellDrugName);
    		scope.sellquantity=window.prompt("You want to sell "+scope.sellDrugName+". \nEnter the amount of drugs you want to sell");
    		if(scope.sellquantity == null){

    		}
    	}
    };
}]);