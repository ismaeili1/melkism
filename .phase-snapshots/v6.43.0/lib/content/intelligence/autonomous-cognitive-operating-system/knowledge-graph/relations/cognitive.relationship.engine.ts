import type { CognitiveNode } from "@/lib/content/intelligence/contracts/autonomous.cognitive.contracts";

export class CognitiveRelationshipEngine {


connect(source:CognitiveNode,target:CognitiveNode,type:string){


return {


source:source.id,


target:target.id,


type,


strength:1


};


}

}



