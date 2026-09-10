import type {

IntelligenceFeedback

} from "./feedback.types";



export class IntelligenceFeedbackEngine {



private feedbacks:
IntelligenceFeedback[] = [];



capture(

sourceId:string,

score:number,

message:string

){


const feedback:IntelligenceFeedback={


id:
crypto.randomUUID(),


sourceId,


score,


message,


status:
"captured",


createdAt:
new Date()


};



this.feedbacks.push(feedback);


return feedback;


}



process(
feedbackId:string
){


const feedback=

this.feedbacks.find(

item=>

item.id===feedbackId

);



if(!feedback){

throw new Error(
"Feedback not found"
);

}



feedback.status="processed";


return feedback;


}



apply(
feedbackId:string
){


const feedback=

this.feedbacks.find(

item=>

item.id===feedbackId

);



if(!feedback){

throw new Error(
"Feedback not found"
);

}



feedback.status="applied";


return feedback;


}



getFeedbacks(){


return this.feedbacks;


}



}



