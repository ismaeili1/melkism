/**
 * MELKISM Learning Memory Optimization Feedback Integration
 * v38.20.14
 *
 * Optimization feedback boundary
 */



export interface LearningMemoryOptimizationFeedback {


accepted:boolean;


feedbackValue:number;


createdAt:Date;


}





export class LearningMemoryOptimizationFeedbackIntegration {



private history:
LearningMemoryOptimizationFeedback[]=[];





processFeedback(

result:
{
accepted:boolean;
score:number;
}

){


const feedback = {


accepted:
result.accepted,


feedbackValue:
this.calculateFeedbackValue(
result.score
),


createdAt:
new Date()


};



this.history.push(
feedback
);



return feedback;


}





calculateFeedbackValue(

score:number

){


return Math.max(

0,

Math.min(

1,

score

)

);


}





getFeedbackHistory(){

return this.history;

}



}
