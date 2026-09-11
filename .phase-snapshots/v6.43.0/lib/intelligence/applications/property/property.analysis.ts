import type {

PropertyAnalysisInput,

PropertyAnalysisSummary

} from "./property.analysis.types";



export class PropertyAnalysisEngine {



analyze(

input:PropertyAnalysisInput

):PropertyAnalysisSummary {



const values=

Object.values(input.data);



const average=

values.length===0

?

0

:

Math.round(

values.reduce(

(a,b)=>a+b,

0

)

/

values.length

);



return {


propertyId:input.propertyId,


valueScore:average,


locationScore:average,


conditionScore:average,


investmentScore:average,


createdAt:new Date()


};



}



}

