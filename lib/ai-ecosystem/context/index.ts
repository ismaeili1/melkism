export type UnifiedIntelligenceContext={

domain:string;

source:string;

};


export function createIntelligenceContext(
domain:string,
source:string
){

return {

domain,
source

};

}
