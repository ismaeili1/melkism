/**
 * MELKISM Intelligent Content Recommendation
 * v38.20.14
 */


export interface ContentRecommendationRecord {


query:string;

items:string[];

createdAt:Date;

}



export class IntelligentContentRecommendation {


private history:
ContentRecommendationRecord[] = [];



createRecommendation(

query:string

){


const record:
ContentRecommendationRecord = {


query,

items:[],

createdAt:new Date()


};


this.history.push(record);


return record;


}



recommendContent(

query:string

){


return this.createRecommendation(query);


}



getRecommendationHistory(){


return this.history;


}


}
