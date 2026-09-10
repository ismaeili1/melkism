/**
 * MELKISM Autonomous Intelligence Decision Coordination Runtime
 *
 * v1.0.8
 */


import type {
 AutonomousDecisionCoordinationContract
}
from "../contracts/autonomous.decision.coordination.contract";



export class AutonomousDecisionCoordinationRuntime {



private readonly coordination:
Map<string,AutonomousDecisionCoordinationContract>;



constructor(){

this.coordination =
new Map();

}



coordinate(
record:AutonomousDecisionCoordinationContract
){

this.coordination.set(
record.id,
record
);


return record;

}



resolve(
id:string
){

return this.coordination.get(id);

}



list(){

return Array.from(
this.coordination.values()
);

}



}

