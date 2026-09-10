import type {

OptimizationMetric,

OptimizationSuggestion

} from "./optimization.types";



export class OptimizationEngine {



private metrics:
OptimizationMetric[] = [];

private suggestions:
OptimizationSuggestion[] = [];



trackMetric(

name:string,

value:number

){


const metric:OptimizationMetric={


id:
crypto.randomUUID(),


name,


value,


createdAt:
new Date()


};



this.metrics.push(metric);


return metric;


}



createSuggestion(

metricId:string,

suggestion:string

){


const item:OptimizationSuggestion={


id:
crypto.randomUUID(),


metricId,


suggestion,


status:
"detected",


createdAt:
new Date()


};



this.suggestions.push(item);


return item;


}



applySuggestion(

suggestionId:string

){


const item=

this.suggestions.find(

suggestion=>

suggestion.id===suggestionId

);



if(!item){

throw new Error(
"Suggestion not found"
);

}



item.status="applied";


return item;


}



getMetrics(){

return this.metrics;

}



getSuggestions(){

return this.suggestions;

}



}



