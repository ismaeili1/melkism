
export interface CollectiveWisdomState {


id:string;


wisdomLevel:number;


networkLevel:number;


sharingLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface KnowledgeExchangeCycle {


cycleId:string;


sourceKnowledge:string;


sharedKnowledge:string;


}



export interface GlobalKnowledgeNode {


nodeId:string;


domain:string;


connectivity:number;


}


