import type {
LearningMemoryRecord
} from "./learning.memory.types";



export interface LearningMemoryFeedback {


experienceId:string;


score:number;


comment?:string;


createdAt:Date;


}



export interface LearningMemorySignal {


experienceId:string;


signal:string;


strength:number;


createdAt:Date;


}



export class LearningMemoryFeedbackService {



private feedbacks:
LearningMemoryFeedback[] = [];



private signals:
LearningMemorySignal[] = [];




attachFeedback(
feedback:LearningMemoryFeedback
){

this.feedbacks.push(feedback);

return feedback;

}




createLearningSignal(
feedback:LearningMemoryFeedback
)
:LearningMemorySignal {


const signal:LearningMemorySignal = {


experienceId:
feedback.experienceId,


signal:
feedback.score >= 0.7
?
"positive"
:
"improvement",


strength:
feedback.score,


createdAt:
new Date()


};


this.signals.push(signal);


return signal;


}




processFeedback(
feedback:LearningMemoryFeedback
){

this.attachFeedback(feedback);


return this.createLearningSignal(
feedback
);

}




getFeedbackSignals(){

return this.signals;

}



}
