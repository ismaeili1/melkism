import type {

CollectiveIntelligenceEngineContract

}

from "../contracts/collective.intelligence.engine.contract";


export class CollectiveIntelligenceEngineRuntime {


private records =
new Map<string,CollectiveIntelligenceEngineContract>();


create(
record:CollectiveIntelligenceEngineContract
){

this.records.set(record.id,record);

return record;

}


knowledge(id:string){

return this.records.get(id)?.sharedKnowledgeModels;

}


memory(id:string){

return this.records.get(id)?.collectiveMemoryModels;

}


reasoning(id:string){

return this.records.get(id)?.groupReasoningModels;

}


decisions(id:string){

return this.records.get(id)?.collectiveDecisionModels;

}


consensus(id:string){

return this.records.get(id)?.consensusIntelligenceModels;

}


emergence(id:string){

return this.records.get(id)?.emergentIntelligenceModels;

}


learning(id:string){

return this.records.get(id)?.collectiveLearningModels;

}


optimization(id:string){

return this.records.get(id)?.optimizationModels;

}


aggregation(id:string){

return this.records.get(id)?.aggregationModels;

}


insights(id:string){

return this.records.get(id)?.collectiveInsights;

}


cycles(id:string){

return this.records.get(id)?.evolutionCycles;

}


resolve(id:string){

return this.records.get(id);

}


list(){

return Array.from(this.records.values());

}

}
