export type IntelligenceDecision={

context:string;

decision:string;

};


export function reason(
context:string
){

return {

context,

decision:"generated"

};

}
