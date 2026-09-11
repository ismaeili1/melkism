/**
 * MELKISM Learning Memory Optimization Priority Fusion
 * v38.20.14
 *
 * Priority signal fusion boundary
 */



export interface LearningMemoryOptimizationFusionSignal {


score:number;


createdAt:Date;


}





export class LearningMemoryOptimizationPriorityFusion {



private history:
LearningMemoryOptimizationFusionSignal[]=[];





fuseSignals(

signals:
number[]

){


const result = {


score:
this.calculateFusionScore(
signals
),


createdAt:
new Date()


};



this.history.push(
result
);



return result;


}





calculateFusionScore(

signals:number[]

){


if(
signals.length===0
){

return 0;

}



const total =
signals.reduce(

(sum,value)=>
sum+value,

0

);



return Math.max(

0,

Math.min(

1,

total / signals.length

)

);


}





getFusionHistory(){

return this.history;

}



}
