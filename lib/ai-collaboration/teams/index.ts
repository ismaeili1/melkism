export type IntelligenceTeam={

name:string;

members:string[];

};


export function createTeam(
name:string
){

return {

name,
members:[]

};

}
