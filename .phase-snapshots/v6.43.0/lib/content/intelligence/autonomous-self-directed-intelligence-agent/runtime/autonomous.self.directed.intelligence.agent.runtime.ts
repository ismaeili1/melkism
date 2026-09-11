import type {

AutonomousSelfDirectedIntelligenceAgentContract

}

from "../contracts/autonomous.self.directed.intelligence.agent.contract";


export class AutonomousSelfDirectedIntelligenceAgentRuntime {


private records =
new Map<string,AutonomousSelfDirectedIntelligenceAgentContract>();


create(record:AutonomousSelfDirectedIntelligenceAgentContract){

this.records.set(record.id,record);

return record;

}


goals(id:string){

return this.records.get(id)?.goalSelectionModels;

}


tasks(id:string){

return this.records.get(id)?.taskDecompositionModels;

}


plans(id:string){

return this.records.get(id)?.actionPlanningModels;

}


execute(id:string){

return this.records.get(id)?.autonomousExecutionModels;

}


memory(id:string){

return this.records.get(id)?.agentMemoryModels;

}


reflection(id:string){

return this.records.get(id)?.reflectionModels;

}


evaluate(id:string){

return this.records.get(id)?.evaluationModels;

}


improve(id:string){

return this.records.get(id)?.improvementModels;

}


cycles(id:string){

return this.records.get(id)?.agentEvolutionTracking;

}


resolve(id:string){

return this.records.get(id);

}


list(){

return Array.from(this.records.values());

}

}
