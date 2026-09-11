export type PropertyNode={

type:string;

location:string;

};


export function createPropertyNode(
type:string,
location:string
){

return {

type,
location

};

}
