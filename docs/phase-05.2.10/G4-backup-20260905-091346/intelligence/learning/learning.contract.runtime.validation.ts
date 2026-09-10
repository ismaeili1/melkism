import {
LearningRegistry
} from "./learning.registry";


import {
toLearningContractExperience
} from "./adapters/learning.contract.adapter";


import type {
LearningExperience
} from "./learning.types";



export function validateLearningContractRuntime(){


const registry =
new LearningRegistry();



const experience:LearningExperience={


id:crypto.randomUUID(),

agentId:"runtime-validator",

type:"interaction",

input:"contract validation",

output:"ok",

success:true,

createdAt:new Date()


};



const contract =
toLearningContractExperience(
experience
);



registry.registerContractExperience(
experience
);



return {

success:true,

contractId:contract.id,

agentId:contract.agentId

};


}

