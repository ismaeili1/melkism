/**
 * MELKISM Intelligence Runtime Observability
 */



export interface RuntimeObservation {


type:string;


component:string;


metadata?:unknown;


timestamp:string;


}



const observations:
RuntimeObservation[]=[];



export function recordRuntimeObservation(
type:string,
component:string,
metadata?:unknown
):RuntimeObservation {


const observation:RuntimeObservation={

type,

component,

metadata,

timestamp:
new Date().toISOString()

};



observations.push(observation);



return observation;

}



export function getRuntimeMetrics(){


const metrics:
Record<string,number>={};



for(const item of observations){


metrics[item.type]=
(metrics[item.type] ?? 0)+1;


}



return metrics;

}



export function getRuntimeTimeline(){

return observations;

}



export function createRuntimeObservationSnapshot(){


return {


count:
observations.length,


last:
observations.length
?
observations[observations.length-1]
:
null,


metrics:
getRuntimeMetrics()


};


}



export function clearRuntimeObservations(){

observations.length=0;

}


