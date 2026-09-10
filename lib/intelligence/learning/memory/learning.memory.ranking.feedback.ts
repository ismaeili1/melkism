/**
 * MELKISM Learning Memory Ranking Feedback
 * v38.20.14
 *
 * Adaptive ranking feedback foundation
 */



export interface LearningMemoryRankingFeedback {


rankingScore:
number;


accepted:
boolean;


feedbackSignal:
number;


createdAt:
Date;


}



export class LearningMemoryRankingFeedbackService {



private history:
LearningMemoryRankingFeedback[] = [];



record(
feedback:LearningMemoryRankingFeedback
){


this.history.push(
feedback
);


return feedback;

}



getHistory(){

return this.history;

}



calculateSignal(){

if(this.history.length===0){

return 0;

}


return (
this.history.reduce(

(sum,item)=>
sum + item.feedbackSignal,

0

)
/
this.history.length
);


}



}