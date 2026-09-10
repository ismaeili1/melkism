
import type {

AnalysisInsight

}
from "./intelligence.analysis.types";



const insights:
AnalysisInsight[]
=
[];



export function saveInsight(
insight:AnalysisInsight
){

insights.push(insight);

return insight;

}



export function getInsights(){

return insights;

}



export function clearInsights(){

insights.length=0;

}



