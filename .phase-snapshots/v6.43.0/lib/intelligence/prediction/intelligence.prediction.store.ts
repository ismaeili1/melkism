
import type {

PredictionResult

}
from "./intelligence.prediction.types";


const predictions:
PredictionResult[]
=
[];



export function savePrediction(
prediction:PredictionResult
){

predictions.push(prediction);

return prediction;

}



export function getPredictions(){

return predictions;

}



export function clearPredictions(){

predictions.length=0;

}



