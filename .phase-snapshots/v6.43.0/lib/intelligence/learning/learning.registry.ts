import type {
  LearningExperience,
  LearningFeedback,
  LearningContext
} from "./learning.types";


import { RuntimeLearningMemoryAdapter } from "./memory/learning.memory.adapter";


import {
  toLearningContractExperience,
  toLearningContractFeedback
} from "./adapters/learning.contract.adapter";


export class LearningRegistry {

private memory = new RuntimeLearningMemoryAdapter();


private experiences:LearningExperience[]=[];


private feedbacks:LearningFeedback[]=[];



storeExperience(
experience:LearningExperience
){

this.experiences.push(experience);

this.memory.save({
id: crypto.randomUUID(),
experienceId: experience.id,
agentId: experience.agentId,
type: experience.type,
input: experience.input,
output: experience.output,
success: experience.success,
createdAt: experience.createdAt
});

}



storeFeedback(
feedback:LearningFeedback
){

this.feedbacks.push(feedback);

}



registerContractExperience(
experience:LearningExperience
){

const contract =
toLearningContractExperience(
experience
);


return contract;

}



registerContractFeedback(
feedback:LearningFeedback
){

const contract =
toLearningContractFeedback(
feedback
);


return contract;

}



getContext():LearningContext{

return {

experiences:this.experiences,

feedbacks:this.feedbacks,

createdAt:new Date()

};

}


}








