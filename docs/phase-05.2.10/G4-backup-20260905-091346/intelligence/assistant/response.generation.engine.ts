/**
 * MELKISM Response Generation Engine
 * v38.20.14
 */


export interface GenerationRecord {


input:unknown;

response:string;

createdAt:Date;

}



export class ResponseGenerationEngine {


private history:
GenerationRecord[] = [];



generateResponse(

input:unknown

){


const record:
GenerationRecord={


input,

response:"",

createdAt:new Date()


};


this.history.push(record);


return record;


}



buildResponse(

context:unknown

){


return this.generateResponse(context);


}



getGenerationHistory(){


return this.history;


}


}
