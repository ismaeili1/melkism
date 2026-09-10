/**
 * MELKISM Learning Memory Decision Feedback Loop
 * v38.20.14
 *
 * Decision reinforcement boundary
 */



export interface LearningMemoryDecisionFeedbackSignal {


accepted:boolean;


score:number;


reinforcement:number;


createdAt:Date;


}




export class LearningMemoryDecisionFeedbackLoop {



private history:
LearningMemoryDecisionFeedbackSignal[]=[];





processDecision(

decision:
{
score:number;
accepted:boolean;
}

){


const signal =
this.createFeedbackSignal(
decision
);



this.history.push(
signal
);



return signal;


}





createFeedbackSignal(

decision:
{
score:number;
accepted:boolean;
}

){


return {


accepted:
decision.accepted,


score:
decision.score,


reinforcement:
decision.accepted
?
decision.score
:
0,


createdAt:
new Date()


};


}





getFeedbackHistory(){

return this.history;

}



}
