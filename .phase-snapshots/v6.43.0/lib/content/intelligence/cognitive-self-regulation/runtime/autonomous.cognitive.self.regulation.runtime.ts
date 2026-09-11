/**
 * MELKISM Autonomous Intelligence Cognitive Self-Regulation Runtime
 *
 * v1.4.0
 */


import type {
 AutonomousCognitiveSelfRegulationContract
}
from "../contracts/autonomous.cognitive.self.regulation.contract";


export class AutonomousCognitiveSelfRegulationRuntime {


private readonly regulations:
Map<string,AutonomousCognitiveSelfRegulationContract>;



constructor(){

this.regulations =
new Map();

}



regulate(
record:AutonomousCognitiveSelfRegulationContract
){

this.regulations.set(
record.id,
record
);


return record;

}



resolve(
id:string
){

return this.regulations.get(id);

}



list(){

return Array.from(
this.regulations.values()
);

}


}

