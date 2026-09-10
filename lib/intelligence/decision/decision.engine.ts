import type {

IntelligenceDecision,

DecisionType

} from "./decision.types";



export class DecisionEngine {



create(

type:DecisionType,

input:unknown

):IntelligenceDecision {


return {


id:crypto.randomUUID(),


type,


input,


score:0,


status:"created",


createdAt:new Date()


};


}



evaluate(

decision:IntelligenceDecision

):IntelligenceDecision {



decision.score=1;

decision.status="evaluated";


return decision;


}



}

