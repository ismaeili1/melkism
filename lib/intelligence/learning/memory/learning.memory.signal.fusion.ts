/**
 * MELKISM Learning Memory Signal Fusion
 * v38.20.14
 *
 * Adaptive signal fusion boundary
 */



export interface LearningMemoryFusionSignal {


source:string;


value:number;


confidence:number;


createdAt:Date;


}




export class LearningMemorySignalFusion {



private history:
LearningMemoryFusionSignal[] = [];





combineSignals(

signals:LearningMemoryFusionSignal[]

){


const total =
signals.reduce(

(sum,item)=>
sum + item.value,

0

);



const count =
signals.length;



const value =
count===0
?
0
:
total/count;



const confidence =
this.calculateConfidence(
signals
);



const result={


source:
"fusion",


value,


confidence,


createdAt:
new Date()


};



this.history.push(
result
);



return result;


}





calculateConfidence(

signals:LearningMemoryFusionSignal[]

){


if(signals.length===0){

return 0;

}



return (

signals.reduce(

(sum,item)=>
sum + item.confidence,

0

)

/
signals.length

);


}





getFusionHistory(){

return this.history;

}



}
