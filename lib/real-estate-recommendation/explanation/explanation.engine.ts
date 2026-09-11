export interface RecommendationExplanation {

reason:string;

evidence:string[];

}


export function explainRecommendation(){

return {

reason:"",

evidence:[]

};

}


