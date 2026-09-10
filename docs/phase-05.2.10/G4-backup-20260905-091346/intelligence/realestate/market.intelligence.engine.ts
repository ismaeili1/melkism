
/**
 * MELKISM
 * Market Intelligence Engine
 */


export type MarketMetricType =
"price"
|
"price_per_area"
|
"supply"
|
"demand"
|
"volume"
|
"rental";



export interface MarketDataRecord {


id:string;

marketId:string;

metric:MarketMetricType;

value:number;

city?:string;

district?:string;

period?:string;

createdAt:string;


}



export interface MarketTrendAnalysis {


marketId:string;

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



function createId(){


return crypto.randomUUID();


}



export class MarketIntelligenceEngine {



private records:
MarketDataRecord[]=[];



addMarketData(
input:Omit<MarketDataRecord,"id"|"createdAt">
){


const record={


...input,

id:createId(),

createdAt:new Date().toISOString()


};



this.records.push(record);


return record;


}




getMarketHistory(
marketId:string
){


return this.records.filter(
item=>item.marketId===marketId
);


}




analyzeMarketTrend(
marketId:string,
metric:MarketMetricType
):MarketTrendAnalysis{


const data=this.records.filter(
item=>
item.marketId===marketId
&&
item.metric===metric
);



if(data.length<2){


return {

marketId,

direction:"insufficient_data",

change:0,

observations:data.length


};


}



const first=data[0].value;

const last=data[data.length-1].value;


const change=
((last-first)/first)*100;



return {


marketId,

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




}


