import type {

UserAnalysisInput,

UserAnalysisSummary

} from "./user.analysis.types";



export class UserAnalysisEngine {



analyze(

input:UserAnalysisInput

):UserAnalysisSummary {



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


userId:input.userId,


behaviorScore:average,


preferenceScore:average,


activityScore:average,


engagementScore:average,


createdAt:new Date()


};



}



}

