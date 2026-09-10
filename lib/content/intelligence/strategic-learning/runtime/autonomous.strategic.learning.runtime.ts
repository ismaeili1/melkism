/**
 * MELKISM Autonomous Intelligence Strategic Learning Runtime
 *
 * v1.1.5
 */


import type {
 AutonomousStrategicLearningContract
}
from "../contracts/autonomous.strategic.learning.contract";



export class AutonomousStrategicLearningRuntime {



private readonly strategies:
Map<string,AutonomousStrategicLearningContract>;



constructor(){

this.strategies =
new Map();

}



strategize(
record:AutonomousStrategicLearningContract
){

this.strategies.set(
record.id,
record
);


return record;

}



resolve(
id:string
){

return this.strategies.get(id);

}



list(){

return Array.from(
this.strategies.values()
);

}



}

