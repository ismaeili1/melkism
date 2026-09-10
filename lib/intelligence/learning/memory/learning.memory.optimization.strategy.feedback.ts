/**
 * MELKISM Learning Memory Optimization Strategy Feedback
 * v38.20.14
 *
 * Strategy learning feedback boundary
 */



export interface LearningMemoryOptimizationFeedbackResult {


strategy:number;


learningImpact:number;


signal:"positive"|"negative";


createdAt:Date;


}





export class LearningMemoryOptimizationStrategyFeedback {



private history:
LearningMemoryOptimizationFeedbackResult[]=[];





createFeedback(

strategy:number,

successScore:number

){


const result = {


strategy,


learningImpact:
this.calculateLearningImpact(
successScore
),


signal:
(successScore >= 0.5
? "positive"
: "negative") as "positive" | "negative",


createdAt:
new Date()


};



this.history.push(
result
);



return result;


}





calculateLearningImpact(

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





getFeedbackHistory(){

return this.history;

}



}
