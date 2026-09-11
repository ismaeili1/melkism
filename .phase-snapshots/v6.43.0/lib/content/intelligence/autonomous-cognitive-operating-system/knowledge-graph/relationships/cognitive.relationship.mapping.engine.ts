import type { CognitiveNode } from "@/lib/content/intelligence/contracts/autonomous.cognitive.contracts";

export class CognitiveRelationshipMappingEngine {


connect(source:CognitiveNode,target:CognitiveNode,type:string){


return {


connected:true,


relationship:{


source,

target,

type


}


};


}


}




