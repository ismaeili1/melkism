/**
 * MELKISM Autonomous Intelligence Cognitive Reasoning Runtime
 *
 * v1.2.8
 */


import type {
 AutonomousCognitiveReasoningContract
}
from "../contracts/autonomous.cognitive.reasoning.contract";


export class AutonomousCognitiveReasoningRuntime {


private readonly reasoning:
Map<string,AutonomousCognitiveReasoningContract>;



constructor(){

this.reasoning =
new Map();

}



reason(
record:AutonomousCognitiveReasoningContract
){

this.reasoning.set(
record.id,
record
);


return record;

}



resolve(
id:string
){

return this.reasoning.get(id);

}



list(){

return Array.from(
this.reasoning.values()
);

}


}

