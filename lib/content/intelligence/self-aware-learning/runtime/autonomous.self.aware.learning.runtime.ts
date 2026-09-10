/**
 * MELKISM Autonomous Intelligence Self-Aware Learning Runtime
 *
 * v1.2.3
 */


import type {
 AutonomousSelfAwareLearningContract
}
from "../contracts/autonomous.self.aware.learning.contract";


export class AutonomousSelfAwareLearningRuntime {


private readonly awareness:
Map<string,AutonomousSelfAwareLearningContract>;



constructor(){

this.awareness =
new Map();

}



understand(
record:AutonomousSelfAwareLearningContract
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

