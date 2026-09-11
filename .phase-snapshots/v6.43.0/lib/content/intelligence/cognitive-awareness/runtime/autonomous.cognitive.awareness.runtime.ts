/**
 * MELKISM Autonomous Intelligence Cognitive Awareness Runtime
 *
 * v1.2.6
 */


import type {
 AutonomousCognitiveAwarenessContract
}
from "../contracts/autonomous.cognitive.awareness.contract";


export class AutonomousCognitiveAwarenessRuntime {


private readonly awareness:
Map<string,AutonomousCognitiveAwarenessContract>;



constructor(){

this.awareness =
new Map();

}



understand(
record:AutonomousCognitiveAwarenessContract
){

this.awareness.set(
record.id,
record
);


return record;

}



resolve(
id:string
){

return this.awareness.get(id);

}



list(){

return Array.from(
this.awareness.values()
);

}


}

