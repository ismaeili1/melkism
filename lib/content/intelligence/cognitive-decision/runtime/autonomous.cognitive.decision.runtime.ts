/**
 * MELKISM Autonomous Intelligence Cognitive Decision Runtime
 *
 * v1.2.9
 */


import type {
 AutonomousCognitiveDecisionContract
}
from "../contracts/autonomous.cognitive.decision.contract";


export class AutonomousCognitiveDecisionRuntime {


private readonly decisions:
Map<string,AutonomousCognitiveDecisionContract>;



constructor(){

this.decisions =
new Map();

}



decide(
record:AutonomousCognitiveDecisionContract
){

this.decisions.set(
record.id,
record
);


return record;

}



resolve(
id:string
){

return this.decisions.get(id);

}



list(){

return Array.from(
this.decisions.values()
);

}


}

