
import {

saveDecision

}
from "./intelligence.decision.store";



export function makeDecision(
request:any
){


const result={


id:
crypto.randomUUID(),


decision:
"Generated intelligence decision",


confidence:
0.5,


reasoning:
[],


createdAt:
new Date()


};



return saveDecision(result);


}


