import type {

UserScoreInput,

UserScoreResult,

UserCategory

} from "./user.scoring.types";



export class UserScoringEngine {



score(

input:UserScoreInput

):UserScoreResult {



const scores=[

input.behaviorScore,

input.preferenceScore,

input.activityScore,

input.engagementScore

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


userId:input.userId,


overallScore,


confidence:

overallScore>0 ? 0.8 : 0,


category,


signals:[

"behavior_evaluated",

"user_score_generated"

],


createdAt:new Date()


};



}



private classify(

score:number

):UserCategory {



if(score>=80){

return "high_engagement";

}


if(score>=50){

return "active";

}


if(score>0){

return "passive";

}


return "unknown";


}



}

