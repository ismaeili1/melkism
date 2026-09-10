import type {

IntelligenceFeedback

} from "../learning/learning.types";


import type {

OptimizationSuggestion

} from "./optimization.types";



export class AdaptiveOptimizationEngine {



create(

feedback:IntelligenceFeedback

):OptimizationSuggestion {



return {


id:crypto.randomUUID(),


feedbackId:feedback.id,


feedback,


recommendation:"adaptive-improvement",


priority:feedback.score,


score:feedback.score,


status:"created",


createdAt:new Date()



};



}



apply(

item:OptimizationSuggestion

){


item.status="applied";


return item;


}



}

