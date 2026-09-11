import type {
  IntelligenceFeedback,
  FeedbackType
} from "./feedback.types";


export class FeedbackEngine {


  private feedbacks: IntelligenceFeedback[] = [];


  record(
    sourceId:string,
    type:FeedbackType,
    signal:string,
    score:number,
    message?:string
  ):IntelligenceFeedback {


    const feedback:IntelligenceFeedback = {

      id: crypto.randomUUID(),

      sourceId,

      type,

      signal,

      message,

      score,

      status:"captured",

      createdAt:new Date()

    };


    this.feedbacks.push(feedback);


    return feedback;

  }



  getAll(){

    return this.feedbacks;

  }



  process(
    feedback:IntelligenceFeedback
  ){

    feedback.status="processed";

    return feedback;

  }



  apply(
    feedback:IntelligenceFeedback
  ){

    feedback.status="applied";

    return feedback;

  }


}

