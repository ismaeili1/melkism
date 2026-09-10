/**
 * MELKISM Autonomous Intelligence Cognitive Understanding Runtime
 *
 * v1.2.7
 */


import type {
 AutonomousCognitiveUnderstandingContract
}
from "../contracts/autonomous.cognitive.understanding.contract";


export class AutonomousCognitiveUnderstandingRuntime {


private readonly understanding:
Map<string,AutonomousCognitiveUnderstandingContract>;



constructor(){

this.understanding =
new Map();

}



understand(
record:AutonomousCognitiveUnderstandingContract
){

this.understanding.set(
record.id,
record
);


return record;

}



resolve(
id:string
){

return this.understanding.get(id);

}



list(){

return Array.from(
this.understanding.values()
);

}


}

