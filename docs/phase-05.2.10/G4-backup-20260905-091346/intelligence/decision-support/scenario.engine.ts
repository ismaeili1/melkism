import type {

ScenarioContext,

ScenarioResult

} from "./scenario.types";



export class ScenarioAnalysisEngine {



simulate(

context:ScenarioContext

):ScenarioResult {



const impact=

context.variables.length===0

?

0

:

context.variables.reduce(

(sum,item)=>

sum+item.value,

0

)

/

context.variables.length;



return {


id:crypto.randomUUID(),


scenarioId:context.id,


impact,


summary:

"scenario simulation generated",


confidence:

Math.min(1,impact),


createdAt:new Date()


};



}



}



