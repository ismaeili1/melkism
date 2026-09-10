import type {

CollectiveIntelligenceDecisionNetworkContract

}

from "../contracts/collective.intelligence.decision.network.contract";



export class CollectiveIntelligenceDecisionNetworkRuntime {



private records =
new Map<string,CollectiveIntelligenceDecisionNetworkContract>();



create(record:CollectiveIntelligenceDecisionNetworkContract){

this.records.set(record.id,record);

return record;

}



decisions(id:string){

return this.records.get(id)?.collectiveDecisionModels;

}



knowledge(id:string){

return this.records.get(id)?.knowledgeAggregationModels;

}



conflicts(id:string){

return this.records.get(id)?.conflictResolutionModels;

}



consensus(id:string){

return this.records.get(id)?.consensusOptimizationModels;

}



learning(id:string){

return this.records.get(id)?.groupLearningModels;

}



memory(id:string){

return this.records.get(id)?.collectiveMemoryModels;

}



evaluation(id:string){

return this.records.get(id)?.decisionEvaluationModels;

}



cycles(id:string){

return this.records.get(id)?.collectiveEvolutionTracking;

}



insights(id:string){

return this.records.get(id)?.networkInsights;

}



resolve(id:string){

return this.records.get(id);

}



list(){

return Array.from(this.records.values());

}

}
