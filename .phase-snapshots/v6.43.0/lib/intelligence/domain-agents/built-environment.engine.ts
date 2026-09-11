import type {

ArchitectureContext,

ArchitectureInsight,

UrbanContext,

UrbanInsight

} from "./built-environment.types";



export class ArchitectureIntelligenceAgent {



analyze(

context:ArchitectureContext

):ArchitectureInsight {



const score=

context.signals.length===0

?

0

:

context.signals.reduce(

(sum,item)=>sum+item.value,

0

)/context.signals.length;



return {


id:crypto.randomUUID(),


projectId:context.projectId,


designScore:score,


summary:"architecture intelligence analysis generated",


confidence:Math.min(1,score),


createdAt:new Date()


};



}



}



export class UrbanIntelligenceAgent {



analyze(

context:UrbanContext

):UrbanInsight {



const score=

context.signals.length===0

?

0

:

context.signals.reduce(

(sum,item)=>sum+item.value,

0

)/context.signals.length;



return {


id:crypto.randomUUID(),


city:context.city,


urbanScore:score,


summary:"urban intelligence analysis generated",


confidence:Math.min(1,score),


createdAt:new Date()


};



}



}

