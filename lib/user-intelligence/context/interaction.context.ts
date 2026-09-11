export interface InteractionContext {

sessionId:string;

intent:string;

createdAt:string;

}


export function createInteractionContext():

InteractionContext {


return {

sessionId:crypto.randomUUID(),

intent:"unknown",

createdAt:new Date().toISOString()

};


}

