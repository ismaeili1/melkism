import type {

PropertyOptimizationSignal,

PropertyOptimizationResult

} from "./property.optimization.types";



import type {

PropertyScoreResult

} from "./property.scoring.types";



export class PropertyOptimizationBridge {



optimize(

score:PropertyScoreResult

):PropertyOptimizationResult {



const targetScore=

Math.min(

100,

score.overallScore + 10

);



const signal:PropertyOptimizationSignal={


id:crypto.randomUUID(),


propertyId:score.propertyId,


type:"value",


currentScore:score.overallScore,


targetScore,


improvement:

targetScore-score.overallScore,


createdAt:new Date()


};



return {


propertyId:score.propertyId,


signals:[signal],


optimizedScore:targetScore,


createdAt:new Date()


};



}



}

