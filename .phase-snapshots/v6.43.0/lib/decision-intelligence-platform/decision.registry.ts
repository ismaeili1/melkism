import type {
DecisionRecord
} from "./decision.types";


const decisions:
DecisionRecord[]=[];



export function registerDecision(
decision:DecisionRecord
){

decisions.push(decision);

}



export function getDecisions(){

return [...decisions];

}

