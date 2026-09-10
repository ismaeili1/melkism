import type {

InferenceRule

} from "./reasoning.types";



import type {

RuleEvaluationContext,

RuleEvaluationResult,

InferenceEvaluation

} from "./rule-evaluation.types";



export class RuleEvaluationEngine {



evaluate(

rule:InferenceRule,

context:RuleEvaluationContext

):RuleEvaluationResult {



const matched=

context.facts.some(

fact=>

fact.includes(rule.condition)

);



return {


ruleId:rule.id,


matched,


confidence:

matched

?

rule.weight

:

0,


reason:

matched

?

"rule condition matched"

:

"rule condition not matched",


createdAt:new Date()


};



}



run(

rules:InferenceRule[],

context:RuleEvaluationContext

):InferenceEvaluation {



const evaluations=

rules.map(

rule=>

this.evaluate(rule,context)

);



const confidence=

evaluations.length===0

?

0

:

evaluations.reduce(

(sum,item)=>

sum+item.confidence,

0

)

/

evaluations.length;



return {


evaluations,


confidence,


createdAt:new Date()


};



}



}

