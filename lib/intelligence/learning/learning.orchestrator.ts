import {
  toLearningContractExperience
} from "./adapters/learning.contract.adapter";


import { 
LearningRegistry 
} from "./learning.registry";


import {
AdaptiveLearningEngine
} from "./adaptive.engine";


import type {
LearningExperience
} from "./learning.types";



export class LearningOrchestrator {


private adaptive =
new AdaptiveLearningEngine();


private registry =
new LearningRegistry();



run(
successRate:number
){


const adaptive =
this.adaptive.evaluate({

signals:1,

successRate,

createdAt:new Date()

});



const experience:LearningExperience={


id:crypto.randomUUID(),

agentId:"learning-engine",

type:"interaction",

input:
"adaptive evaluation",

output:
adaptive.action,

success:true,

createdAt:new Date()


};



const contractExperience =
toLearningContractExperience(
experience
);



this.registry.registerContractExperience(
experience
);



return {

...adaptive,

contractExperience

};


}


}




