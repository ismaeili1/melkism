import type {
OpportunityScore
} from "./investment.types";


export function calculateOpportunity(
investmentId:string,
score:number
):OpportunityScore{


return {

investmentId,

score

};


}

