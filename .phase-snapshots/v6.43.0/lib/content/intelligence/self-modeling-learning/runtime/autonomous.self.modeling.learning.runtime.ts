/**
 * MELKISM Autonomous Intelligence Self Modeling Learning Runtime
 *
 * v1.2.4
 */


import type {
 AutonomousSelfModelingLearningContract
}
from "../contracts/autonomous.self.modeling.learning.contract";


export class AutonomousSelfModelingLearningRuntime {


private readonly models:
Map<string,AutonomousSelfModelingLearningContract>;



constructor(){

this.models =
new Map();

}



model(
record:AutonomousSelfModelingLearningContract
){

this.models.set(
record.id,
record
);


return record;

}



resolve(
id:string
){

return this.models.get(id);

}



list(){

return Array.from(
this.models.values()
);

}


}

