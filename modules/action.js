'use strict';
var action=angular.module('action',['wareHouse','market']);

action.service('actionService',['drugCityService','warehouseService',function(dcs,whs){
var acScope=this;
acScope.sellDrug = function(){
 console.log("sell drugs");


};

acScope.buyDrug = function(){
acScope.drugs=dcs.drugs;
acScope.whdrugs=whs.whdrugs;
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
           if(temp!=null && temp <= acScope.drugs[i].qty)
           {
           	  var quantity = acScope.drugs[i].qty;
           	  console.log(quantity);
           	  console.log(temp);
              acScope.drugs[i].selected=false;
              console.log(acScope.drugs[i].qty);
           	  acScope.whdrugs.push({name :acScope.drugs[i].name, qty:temp, price: acScope.drugs[i].price, selected : false});
           	  
              console.log(whs.whdrugs);
              acScope.drugs[i].qty=(quantity-temp);
            } else if(temp!=null &&  temp> acScope.drugs[i].qty) {
              window.alert("Please specify values within range!");
            }
          break;
     }
}

};
acScope.dumpDrug=function(){
  acScope.drugs=dcs.drugs;
  acScope.whdrugs=whs.whdrugs;
  //console.log("inside dumpDrug");
  for(var i=0;i < acScope.whdrugs.length;i++){
        // console.log(acScope.whdrugs[i]);
     if(acScope.whdrugs[i].selected == true)
     {
        var temp = null;
        temp=window.prompt("You want dump "+acScope.whdrugs[i].name+" You have available amount "+acScope.whdrugs[i].qty+"\n Enter the ammount you want to dump");
        
        //console.log(temp);
        
        if(temp != null){
                var quant= acScope.whdrugs[i].qty;
             
             if(temp==acScope.whdrugs[i].qty){
                  acScope.whdrugs.splice(i,1);
               }
             
             else if(temp < acScope.whdrugs[i].qty){
                  acScope.whdrugs[i].qty = quant - temp;
               }
             
             else if(temp > acScope.whdrugs[i].qty){
                  window.alert("You have only "+acScope.whdrugs[i].qty+" quantity"+"\nEnter valid Quantity");
               }
         // sconsole.log(acScope.whdrugs[i]);
       }
     }
  }
};

}]);