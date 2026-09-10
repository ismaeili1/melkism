
export interface KnowledgeNode {


id:string;


type:string;


value:string;


}



export interface ContextVector {


domain:string;


signals:string[];


}



export interface DecisionKnowledge {


decision:string;


confidence:number;


evidence:string[];


}



