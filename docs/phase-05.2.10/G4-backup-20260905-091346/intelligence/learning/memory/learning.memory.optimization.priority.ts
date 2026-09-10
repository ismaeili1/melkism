/**
 * MELKISM Learning Memory Optimization Priority Engine
 * v38.20.14
 *
 * Optimization priority boundary
 */



export interface LearningMemoryOptimizationPrioritySignal {


priority:number;


sourceValue:number;


createdAt:Date;


}





export class LearningMemoryOptimizationPriorityEngine {



private history:
LearningMemoryOptimizationPrioritySignal[]=[];





evaluatePriority(

signal:
{
value:number;
}

){


const result = {


priority:
this.normalizePriority(
signal.value
),


sourceValue:
signal.value,


createdAt:
new Date()


};



this.history.push(
result
);



return result;


}





normalizePriority(

value:number

){


return Math.max(

0,

Math.min(

1,

value

)

);


}





getPriorityHistory(){

return this.history;

}



}
