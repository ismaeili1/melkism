
import {

saveFusionResult

}
from "./intelligence.fusion.store";



export function fuseKnowledge(
request:any
){


const result={


id:
crypto.randomUUID(),


mergedContext:
{

sources:
request.sources || []

},


confidence:
0.5,


sources:
request.sources || [],


createdAt:
new Date()


};



return saveFusionResult(result);


}

