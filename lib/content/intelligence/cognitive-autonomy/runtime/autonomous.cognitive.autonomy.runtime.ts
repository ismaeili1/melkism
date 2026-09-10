/**
 * MELKISM Autonomous Intelligence Cognitive Autonomy Runtime
 *
 * v1.3.5
 */


import type {
 AutonomousCognitiveAutonomyContract
}
from "../contracts/autonomous.cognitive.autonomy.contract";


export class AutonomousCognitiveAutonomyRuntime {


private readonly autonomies:
Map<string,AutonomousCognitiveAutonomyContract>;



constructor(){

this.autonomies =
new Map();

}



autonomize(
record:AutonomousCognitiveAutonomyContract
){

this.autonomies.set(
record.id,
record
);


return record;

}



resolve(
id:string
){

return this.autonomies.get(id);

}



list(){

return Array.from(
this.autonomies.values()
);

}


}

