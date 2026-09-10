
import {

predict

}
from "./intelligence.prediction.engine";


import {

getPredictions,
clearPredictions

}
from "./intelligence.prediction.store";



export function runPrediction(
request:any
){

return predict(request);

}



export function listPredictions(){

return getPredictions();

}



export function resetPredictions(){

return clearPredictions();

}



