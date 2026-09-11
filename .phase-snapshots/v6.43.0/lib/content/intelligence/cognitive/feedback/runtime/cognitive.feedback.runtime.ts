/**
 * MELKISM Intelligence Feedback Runtime
 *
 * v0.9.1
 */


import type {
 CognitiveFeedbackContract
}
from "../contracts/cognitive.feedback.contract";



export class CognitiveFeedbackRuntime {



private readonly feedback:
Map<string,CognitiveFeedbackContract>;



constructor(){

this.feedback =
new Map();

}



record(
item:CognitiveFeedbackContract
){

this.feedback.set(
item.id,
item
);

}



resolve(
id:string
){

return this.feedback.get(id);

}



list(){

return Array.from(
this.feedback.values()
);

}



}

