export type IntelligenceSession={

id:string;

participants:string[];

};


export function createSession(
id:string
){

return {

id,
participants:[]

};

}
