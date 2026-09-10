import type {
MetaIntelligenceReflectionContract
}
from "../contracts/meta.intelligence.reflection.contract";

export class MetaIntelligenceReflectionRuntime {

private records =
new Map<string,MetaIntelligenceReflectionContract>();

create(record:MetaIntelligenceReflectionContract){

this.records.set(record.id,record);

return record;
}

analysis(id:string){

return this.records.get(id)?.selfAnalysisModels;
}

decisions(id:string){

return this.records.get(id)?.decisionReflectionModels;
}

knowledge(id:string){

return this.records.get(id)?.knowledgeReflectionModels;
}

behavior(id:string){

return this.records.get(id)?.behaviorReflectionModels;
}

strategy(id:string){

return this.records.get(id)?.strategyReflectionModels;
}

states(id:string){

return this.records.get(id)?.cognitiveStateAnalysisModels;
}

performance(id:string){

return this.records.get(id)?.performanceReflectionModels;
}

learning(id:string){

return this.records.get(id)?.learningReflectionModels;
}

insights(id:string){

return this.records.get(id)?.metaInsights;
}

cycles(id:string){

return this.records.get(id)?.reflectionEvolutionTracking;
}

resolve(id:string){

return this.records.get(id);
}

list(){

return Array.from(this.records.values());
}

}
