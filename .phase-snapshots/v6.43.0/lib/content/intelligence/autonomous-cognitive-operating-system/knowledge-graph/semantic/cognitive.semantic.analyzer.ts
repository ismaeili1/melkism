export class CognitiveSemanticAnalyzer {


analyze(node:any){


return {


concept:node.concept,


relevance:node.importance,


analyzed:true


};


}

}
