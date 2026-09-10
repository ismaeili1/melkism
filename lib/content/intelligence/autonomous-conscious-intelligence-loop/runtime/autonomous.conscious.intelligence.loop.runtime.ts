import type {

AutonomousConsciousIntelligenceLoopContract

}

from "../contracts/autonomous.conscious.intelligence.loop.contract";



export class AutonomousConsciousIntelligenceLoopRuntime {


private records =
new Map<string,AutonomousConsciousIntelligenceLoopContract>();



create(record:AutonomousConsciousIntelligenceLoopContract){

this.records.set(record.id,record);

return record;

}



observe(id:string){

return this.records.get(id)?.observationModels;

}



interpret(id:string){

return this.records.get(id)?.interpretationModels;

}



reason(id:string){

return this.records.get(id)?.reasoningCycleModels;

}



decide(id:string){

return this.records.get(id)?.decisionCycleModels;

}



execute(id:string){

return this.records.get(id)?.executionCycleModels;

}



evaluate(id:string){

return this.records.get(id)?.evaluationModels;

}



learn(id:string){

return this.records.get(id)?.learningLoopModels;

}



improve(id:string){

return this.records.get(id)?.improvementLoopModels;

}



feedback(id:string){

return this.records.get(id)?.feedbackSynchronizationModels;

}



states(id:string){

return this.records.get(id)?.consciousStateTracking;

}



cycles(id:string){

return this.records.get(id)?.loopEvolutionTracking;

}



resolve(id:string){

return this.records.get(id);

}



list(){

return Array.from(this.records.values());

}

}
