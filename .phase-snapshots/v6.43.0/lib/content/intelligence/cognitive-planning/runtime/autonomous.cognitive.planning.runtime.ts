/**
 * MELKISM Autonomous Intelligence Cognitive Planning Runtime
 *
 * v1.3.0
 */


import type {
 AutonomousCognitivePlanningContract
}
from "../contracts/autonomous.cognitive.planning.contract";


export class AutonomousCognitivePlanningRuntime {


private readonly plans:
Map<string,AutonomousCognitivePlanningContract>;



constructor(){

this.plans =
new Map();

}



plan(
record:AutonomousCognitivePlanningContract
){

this.plans.set(
record.id,
record
);


return record;

}



resolve(
id:string
){

return this.plans.get(id);

}



list(){

return Array.from(
this.plans.values()
);

}


}

