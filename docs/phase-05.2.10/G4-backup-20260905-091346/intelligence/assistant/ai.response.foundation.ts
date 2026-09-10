/**
 * MELKISM AI Response Foundation
 * v38.20.14
 */


export interface AIResponseRecord {


query:string;

content:string;

language:string;

createdAt:Date;

}



export class AIResponseFoundation {


private history:
AIResponseRecord[] = [];



createResponse(

query:string,

content:string,

language:string="fa"

){


const response:
AIResponseRecord={


query,

content,

language,

createdAt:new Date()


};


this.history.push(response);


return response;


}



formatResponse(

content:string

){


return {


content,

formatted:true


};


}



getResponseHistory(){


return this.history;


}


}
