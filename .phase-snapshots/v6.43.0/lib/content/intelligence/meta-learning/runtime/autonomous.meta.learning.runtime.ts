/**
 * MELKISM Autonomous Intelligence Meta Learning Runtime
 *
 * v1.2.0
 */


import type {
 AutonomousMetaLearningContract
}
from "../contracts/autonomous.meta.learning.contract";


export class AutonomousMetaLearningRuntime {


private readonly metaLearnings:
Map<string,AutonomousMetaLearningContract>;


constructor(){

this.metaLearnings =
new Map();

}


learn(
record:AutonomousMetaLearningContract
){

this.metaLearnings.set(
record.id,
record
);


return record;

}


resolve(
id:string
){

return this.metaLearnings.get(id);

}


list(){

return Array.from(
this.metaLearnings.values()
);

}


}

