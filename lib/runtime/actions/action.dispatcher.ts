import type {

IntelligenceAction

} from "./action.types";



export class ActionDispatcher {



private actions:
IntelligenceAction[] = [];



register(
name:string,
payload:unknown
){


const action:IntelligenceAction={


id:
crypto.randomUUID(),


name,


payload,


status:
"created",


createdAt:
new Date()


};



this.actions.push(action);


return action;


}



queue(
actionId:string
){


const action=

this.actions.find(

item=>

item.id===actionId

);



if(!action){

throw new Error(
"Action not found"
);

}



action.status="queued";


return action;


}



execute(
actionId:string
){


const action=

this.actions.find(

item=>

item.id===actionId

);



if(!action){

throw new Error(
"Action not found"
);

}



action.status="executing";


return action;


}



getActions(){


return this.actions;


}



}


