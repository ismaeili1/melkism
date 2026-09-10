export type ExperienceOutcome =

"success"

|

"failure"

|

"neutral";



export interface IntelligenceExperience {


id:string;


action:string;


context:string;


outcome:ExperienceOutcome;


result:unknown;


createdAt:Date;


}



