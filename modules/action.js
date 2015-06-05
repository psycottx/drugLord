'use strict'; 
var action=angular.module('action',['wareHouse','market']);
action.service('actionService',['drugCityService','warehouseService',function(dcs,whs){
var acScope=this;
acScope.drugs=dcs.drugs;
acScope.whdrugs=whs.whdrugs;
acScope.sellDrug = function(){
 console.log("sell drugs");



};

acScope.buyDrug = function(){
for(var i=0;i < acScope.drugs.length;i++)
{
	console.log('inside buy');
	if(acScope.drugs[i].selected == true)
     {
     	  var temp=0;
           temp=window.prompt("You want to buy "+acScope.drugs[i].name+" price of $"+acScope.drugs[i].price+" availabe quantity is "+acScope.drugs[i].qty +"\n enter the quantity you want to buy");
           if(temp <= acScope.drugs[i].qty && temp!=null)
           {
           	  var quantity = acScope.drugs[i].qty;
              acScope.drugs[i].selected=false;
           	  acScope.whdrugs.push({name:acScope.drugs[i].name,qty:temp,price:acScope.drugs[i].price,selected:false});
              acScope.drugs[i].qty=(quantity-temp);
            }
          break;
     }
}

};
acScope.dumpDrug=function(){
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