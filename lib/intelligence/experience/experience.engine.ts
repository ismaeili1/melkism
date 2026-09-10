import type {

IntelligenceExperience,

ExperienceOutcome

} from "./experience.types";



export class ExperienceEngine {



private experiences:
IntelligenceExperience[] = [];



record(

action:string,

context:string,

outcome:ExperienceOutcome,

result:unknown

){


const experience:IntelligenceExperience={


id:
crypto.randomUUID(),


action,


context,


outcome,


result,


createdAt:
new Date()


};



this.experiences.push(experience);


return experience;


}



findByOutcome(

outcome:ExperienceOutcome

){


return this.experiences.filter(

experience=>

experience.outcome===outcome

);


}



getAll(){


return this.experiences;


}



}



