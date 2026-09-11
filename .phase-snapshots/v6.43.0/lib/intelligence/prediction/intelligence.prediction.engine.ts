
import {

savePrediction

}
from "./intelligence.prediction.store";



export function predict(
request:any
){


const result={


id:
request.id || crypto.randomUUID(),


value:
null,


confidence:
0.5,


factors:
[],


createdAt:
new Date()


};



return savePrediction(result);


}



