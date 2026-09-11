import type {

LearningExperience,

LearningFeedback,

LearningContext

} from "./learning.types";



export class LearningRegistry {



private experiences:LearningExperience[]=[];


private feedbacks:LearningFeedback[]=[];



storeExperience(

experience:LearningExperience

){


this.experiences.push(experience);


}



storeFeedback(

feedback:LearningFeedback

){


this.feedbacks.push(feedback);


}



getContext():LearningContext{


return {


experiences:this.experiences,


feedbacks:this.feedbacks,


createdAt:new Date()


};



}



}

