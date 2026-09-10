/**
 * MELKISM Learning Memory Adaptive Signal Pipeline
 * v38.20.14
 *
 * Adaptive signal boundary
 */



export interface LearningMemoryAdaptiveSignal {



source:string;


value:number;


createdAt:Date;


}




export class LearningMemoryAdaptiveSignalPipeline {



private history:
LearningMemoryAdaptiveSignal[] = [];





receiveSignal(
signal:LearningMemoryAdaptiveSignal
){


const normalized =
this.normalizeSignal(signal);



this.history.push(
normalized
);



return normalized;


}





normalizeSignal(
signal:LearningMemoryAdaptiveSignal
):LearningMemoryAdaptiveSignal{


return {


source:
signal.source,


value:
Math.max(
0,
Math.min(
1,
signal.value
)
),


createdAt:
signal.createdAt


};


}





getSignalHistory(){


return this.history;


}



}
