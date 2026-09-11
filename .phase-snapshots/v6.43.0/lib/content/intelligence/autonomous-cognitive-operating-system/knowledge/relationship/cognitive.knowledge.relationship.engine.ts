export class CognitiveKnowledgeRelationshipEngine {


discover(concepts:any[]){


return {


relationships:[


{

from:concepts[0],

to:concepts[1],

type:"related"


}

],


discovered:true


};


}

}
