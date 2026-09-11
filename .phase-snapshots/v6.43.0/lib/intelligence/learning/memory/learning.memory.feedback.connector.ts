/**
 * MELKISM Learning Memory Feedback Connector
 * v38.20.14
 *
 * Ranking feedback boundary adapter
 */


import {

LearningMemoryRankingFeedbackService

} from "./learning.memory.ranking.feedback";



export interface LearningMemoryFeedbackSignal {


rankingScore:number;

accepted:boolean;

feedbackSignal:number;

createdAt:Date;


}



export class LearningMemoryFeedbackConnector {



private feedback =
new LearningMemoryRankingFeedbackService();





connectRankingResult(

result:LearningMemoryFeedbackSignal

){


return this.feedback.record({

rankingScore:
result.rankingScore,


accepted:
result.accepted,


feedbackSignal:
result.feedbackSignal,


createdAt:
result.createdAt


});


}





createFeedbackSignal(

score:number,

accepted:boolean

){


return {

rankingScore:
score,


accepted,


feedbackSignal:
accepted ? 1 : 0,


createdAt:
new Date()


};


}





getFeedbackHistory(){


return this.feedback.getHistory();


}



}
