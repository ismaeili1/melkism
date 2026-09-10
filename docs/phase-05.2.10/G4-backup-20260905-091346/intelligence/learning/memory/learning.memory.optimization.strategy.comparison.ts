/**
 * MELKISM Learning Memory Optimization Strategy Comparison
 * v38.20.14
 *
 * Strategy comparison boundary
 */



export interface LearningMemoryOptimizationComparisonResult {


firstScore:number;


secondScore:number;


difference:number;


preferred:"first"|"second";


createdAt:Date;


}





export class LearningMemoryOptimizationStrategyComparison {



private history:
LearningMemoryOptimizationComparisonResult[]=[];





compare(

first:number,

second:number

){


const result = {


firstScore:first,


secondScore:second,


difference:
this.calculateDifference(
first,
second
),


preferred:
(second > first
? "second"
: "first") as "first" | "second",


createdAt:
new Date()


};



this.history.push(
result
);



return result;


}





calculateDifference(

first:number,

second:number

){

return Math.abs(
first-second
);

}





getComparisonHistory(){

return this.history;

}



}
