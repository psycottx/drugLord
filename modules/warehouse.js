'use strict';
var pocket=angular.module('wareHouse',[]);
pocket.service('warehouseService',function(){
	var scope = this;
    scope.whdrugs = [];
	scope.wareHouseSize=10;

	scope.prevTarget = null;
    scope.selectedDrugWareHouse = function(e,index) {
        for(var i=0; i < scope.whdrugs.length; i++) {
            scope.whdrugs[i].selected = false;
        }
        scope.whdrugs[index].selected = true;
        if(scope.prevTarget == null) {
            e.currentTarget.className="list-group-item active";
            scope.prevTarget = e.currentTarget;
        } else {
            scope.prevTarget.className="list-group-item";
            e.currentTarget.className="list-group-item active";
            scope.prevTarget = e.currentTarget;
        }
        
      //  console.log(mark.drugs);
    };
    

});


