export type IntelligenceNode={

id:string;

location:string;

};


export function createNode(
id:string,
location:string
){

return {

id,

location

};

}
