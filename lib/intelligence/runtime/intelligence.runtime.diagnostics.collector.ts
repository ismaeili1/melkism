/**
 * MELKISM Runtime Diagnostic Auto Collector
 */


export interface RuntimeDiagnosticCollector {


name:string;


source:string;


}



const collectors:
RuntimeDiagnosticCollector[]=[];



const snapshots:
unknown[]=[];



export function registerDiagnosticCollector(
name:string,
source:string
){


const collector:RuntimeDiagnosticCollector={

name,

source

};


collectors.push(collector);


return collector;

}



export function collectRuntimeSnapshot(){


const snapshot={


timestamp:
new Date().toISOString(),


collectors:
collectors.map(item=>item.name),


sources:
collectors.map(item=>item.source)


};


snapshots.push(snapshot);


return snapshot;

}



export function getCollectedSnapshots(){

return snapshots;

}



export function clearCollectedSnapshots(){

snapshots.length=0;

}

