import type {

KnowledgeFeedback

} from "./feedback.types";


export function evaluateFeedback(

feedback:KnowledgeFeedback[]

){

if(feedback.length===0){

return 0;

}


return feedback.reduce(

(total,item)=>

total+item.score,

0

)/feedback.length;


}


