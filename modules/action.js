'use strict';
var action=angular.module('action',['wareHouse','market']);
action.service('actionService',['drugCityService','warehouseService',function(dcs,whs){
var acScope=this;
acScope.sellDrug = function(){
 console.log("sell drugs");


};

acScope.buyDrug = function(){
console.log("Buy drugs");
acScope.drugs=dcs.drugs;
acScope.whdrugs=whs.whdrugs;
console.log(acScope.drugs);
for(var i=0;i < acScope.drugs.length;i++)
{
	console.log('inside for');
	console.log(acScope.drugs[i].name);
	if(acScope.drugs[i].selected == true)
     {
     	  var temp=0;
     	  console.log('inside if');
          console.log(acScope.drugs[i]);
           temp=window.prompt("You want to buy "+acScope.drugs[i].name+" price of $"+acScope.drugs[i].price+" availabe quantity is "+acScope.drugs[i].qty +"\n enter the quantity you want to buy");
           if(temp <= acScope.drugs[i].qty && temp!=null)
           {
           	  var quantity = acScope.drugs[i].qty;
           	  console.log(quantity);
           	  console.log(temp);
              acScope.drugs[i].selected=false;
              acScope.drugs[i].qty = temp;
              console.log(acScope.drugs[i].qty);
           	  acScope.whdrugs.push(acScope.drugs[i]);
           	  
              console.log(whs.whdrugs);
              acScope.drugs[i].qty=(quantity-temp);
            }
          break;
     }
}

};

}]);