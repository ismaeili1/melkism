/**
 * MELKISM Autonomous Intelligence State Management Runtime
 *
 * v1.0.1
 */


import type {
 AutonomousStateManagementContract
}
from "../contracts/autonomous.state.management.contract";



export class AutonomousStateManagementRuntime {



private readonly states:
Map<string,AutonomousStateManagementContract>;



constructor(){

this.states =
new Map();

}



create(
state:AutonomousStateManagementContract
){

this.states.set(
state.id,
state
);


return state;

}



update(
id:string,
state:Record<string,unknown>
){

const current =
this.states.get(id);



if(!current){

return undefined;

}



const updated:
AutonomousStateManagementContract =
{

...current,

version:
current.version + 1,


state,


status:
"updated",


previousVersionId:
current.id

};



this.states.set(
id,
updated
);



return updated;

}



resolve(
id:string
){

return this.states.get(id);

}



list(){

return Array.from(
this.states.values()
);

}



}

