export class CognitiveKnowledgeNodeEngine {


create(entity:any){


return {


created:true,


node:{


id:Date.now(),

entity


}


};


}


}
