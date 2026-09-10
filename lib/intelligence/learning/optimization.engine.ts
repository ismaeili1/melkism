import type {

LearningExperience

} from "./learning.types";



import type {

LearningOptimizationResult,

LearningPattern,

OptimizationStrategy

} from "./optimization.types";



export class LearningOptimizationEngine {



optimize(

experiences:LearningExperience[]

):LearningOptimizationResult {



const patterns:LearningPattern[]=experiences.map(

experience=>({


id:crypto.randomUUID(),


agentId:experience.agentId,


pattern:experience.type,


frequency:1,


successRate:

experience.success

?

1

:

0,


createdAt:new Date()


})

);



const strategies:OptimizationStrategy[]=patterns.map(

pattern=>({


id:crypto.randomUUID(),


agentId:pattern.agentId,


type:"performance",


action:

pattern.successRate<1

?

"improve behavior"

:

"maintain strategy",


priority:

pattern.successRate<1

?

1

:

0,


createdAt:new Date()


})

);



return {


patterns,


strategies,


createdAt:new Date()


};



}



}


