import type {

IntelligenceFeedback

} from "./feedback.types";



export class FeedbackLoop {



private feedbacks:
IntelligenceFeedback[] = [];



evaluate(
feedback:IntelligenceFeedback
){


this.feedbacks.push(feedback);


return {

...feedback,

evaluated:true

};


}



getFeedbacks(){


return this.feedbacks;


}



getAverageScore(){


if(this.feedbacks.length===0){

return 0;

}


return (

this.feedbacks.reduce(

(sum,item)=>

sum+item.score,

0

)

/

this.feedbacks.length

);


}



}


