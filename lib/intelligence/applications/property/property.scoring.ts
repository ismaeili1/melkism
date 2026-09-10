import type {

PropertyScoreInput,

PropertyScoreResult,

PropertyCategory

} from "./property.scoring.types";



export class PropertyScoringEngine {



score(

input:PropertyScoreInput

):PropertyScoreResult {



const scores=[

input.valueScore,

input.locationScore,

input.conditionScore,

input.investmentScore

];



const overallScore=Math.round(

scores.reduce(

(a,b)=>a+b,

0

)

/ scores.length

);



const category=this.classify(overallScore);



return {


propertyId:input.propertyId,


overallScore,


confidence:

overallScore>0 ? 0.8 : 0,


category,


signals:[

"value_evaluated",

"property_score_generated"

],


createdAt:new Date()


};



}



private classify(

score:number

):PropertyCategory {



if(score>=80){

return "premium";

}


if(score>=50){

return "standard";

}


if(score>0){

return "low";

}


return "unknown";


}



}

