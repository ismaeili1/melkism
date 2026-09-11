import type {
 SemanticEvidence
}
from "./evidence.types";


export function evaluateEvidence(
 evidence:SemanticEvidence[]
):number {


if(evidence.length===0){

return 0;

}


const total =
evidence.reduce(
(sum,item)=>
sum+item.reliability,
0
);


return total / evidence.length;


}


