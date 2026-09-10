import type {

SwarmAgentOpinion,

SwarmResult,

SwarmDecision

} from "./swarm.types";



export class SwarmIntelligenceEngine {



decide(

opinions:SwarmAgentOpinion[]

):SwarmResult {



const sorted=[...opinions].sort(

(a,b)=>

(b.confidence*b.weight)

-

(a.confidence*a.weight)

);



const selected=sorted[0];



const decision:SwarmDecision={


id:crypto.randomUUID(),


type:"weighted",


decision:selected.decision,


confidence:selected.confidence,


opinions,


createdAt:new Date()


};



return {


decision,


agents:opinions.length,


createdAt:new Date()


};



}



}

