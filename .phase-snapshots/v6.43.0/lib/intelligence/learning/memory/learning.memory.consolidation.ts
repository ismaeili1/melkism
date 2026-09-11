/**
 * MELKISM Learning Optimization State
 */

export interface OptimizationState {

id:string;

optimized:boolean;

improvement:number;

createdAt:Date;

}

import {
  LearningMemoryOptimizationService
} from "./learning.memory.optimization";

/**
 * MELKISM Learning Memory Consolidation
 * v38.20.14
 */




export interface LearningMemoryState {

  total:number;

  optimized:number;

  improvement:number;

}


export class LearningMemoryConsolidation {


private history:OptimizationState[]=[];


add(
optimization:OptimizationState
){

this.history.push(
optimization
);

return optimization;

}



getState():LearningMemoryState{


const total =
this.history.length;


const optimized =
this.history.filter(
item => item.optimized
).length;



return {

total,

optimized,

improvement:
total===0
?0
:optimized/total

};


}



getHistory(){

return this.history;

}



}




