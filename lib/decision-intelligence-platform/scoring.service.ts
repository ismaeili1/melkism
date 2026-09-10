import type {
ScoreResult
} from "./decision.types";


export function calculateScore(
values:number[]
):ScoreResult{


const score =
values.length===0
?0
:
values.reduce(
(sum,value)=>sum+value,
0
)
/
values.length;



return {

score,

factors:values.map(
(_,index)=>`factor-${index+1}`
)

};


}

