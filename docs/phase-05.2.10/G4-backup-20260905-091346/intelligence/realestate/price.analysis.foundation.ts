
/**
 * MELKISM
 * Price Analysis Foundation
 */



export type PriceTransactionType =
"sale"
|
"rent"
|
"lease"
|
"investment";



export interface PriceRecord {


id:string;

propertyId:string;

amount:number;

currency:string;

transactionType?:PriceTransactionType;

area?:number;

pricePerArea?:number;

createdAt:string;


}



export interface PriceTrendAnalysis {


propertyId:string;

direction:
"rising"
|
"falling"
|
"stable"
|
"insufficient_data";


change:number;

observations:number;


}




function createPriceId(){


return crypto.randomUUID();


}




export class PriceAnalysisFoundation {



private records:
PriceRecord[]=[];



addPriceRecord(
input:Omit<PriceRecord,"id"|"createdAt"|"pricePerArea">
){



const record:PriceRecord={


...input,


id:createPriceId(),


pricePerArea:
input.area && input.area>0
?
input.amount/input.area
:
undefined,


createdAt:new Date().toISOString()


};



this.records.push(record);



return record;


}





getPriceHistory(
propertyId:string
){


return this.records.filter(
item=>
item.propertyId===propertyId
);


}





analyzePriceTrend(
propertyId:string
):PriceTrendAnalysis{


const data=this.getPriceHistory(propertyId);



if(data.length<2){


return {


propertyId,


direction:"insufficient_data",


change:0,


observations:data.length


};


}



const first=data[0].amount;


const last=data[data.length-1].amount;



const change=
((last-first)/first)*100;



return {


propertyId,


direction:
change>0
?
"rising"
:
change<0
?
"falling"
:
"stable",


change,


observations:data.length


};



}





calculatePriceIndex(
propertyId:string
){



const data=this.getPriceHistory(propertyId);



if(data.length===0){

return 0;

}



return (
data.reduce(
(sum,item)=>sum+item.amount,
0
)
/
data.length
);



}




}


