import type {

LearningContext,

RuntimeFeedback,

IntelligenceBridgeState

} from "./bridge.types";



export class LearningRuntimeBridge {



private contexts:
LearningContext[] = [];



private feedbacks:
RuntimeFeedback[] = [];



sendContext(
data:unknown
){


const context:LearningContext={


id:
crypto.randomUUID(),


source:
"learning",


data,


createdAt:
new Date()


};



this.contexts.push(context);


return context;


}



receiveFeedback(
executionId:string,
result:unknown
){


const feedback:RuntimeFeedback={


id:
crypto.randomUUID(),


executionId,


result,


createdAt:
new Date()


};



this.feedbacks.push(feedback);


return feedback;


}



getState():IntelligenceBridgeState{


return {


contextCount:
this.contexts.length,


feedbackCount:
this.feedbacks.length


};


}



}



