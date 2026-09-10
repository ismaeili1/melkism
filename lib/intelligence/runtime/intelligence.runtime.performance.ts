/**
 * MELKISM Runtime Performance Audit
 */


export interface RuntimePerformanceSnapshot {


timestamp:string;


registrySize:number;


eventLoad:number;


snapshotCount:number;


status:string;


}



const history:
RuntimePerformanceSnapshot[]=[];



export function collectRuntimePerformance(){


const snapshot:
RuntimePerformanceSnapshot={


timestamp:
new Date().toISOString(),


registrySize:0,


eventLoad:0,


snapshotCount:0,


status:"healthy"


};


history.push(snapshot);


return snapshot;

}



export function getRuntimePerformanceHistory(){

return history;

}



export function clearRuntimePerformanceHistory(){

history.length=0;

}



export function evaluateRuntimePerformance(){


const latest =
history[history.length-1];


if(!latest){

return "no-data";

}


return latest.status;

}

