export interface SearchIntentType {

name:string;

confidence:number;

}


export interface SemanticSearchResult {

id:string;

title:string;

relevance:number;

}


export interface SearchExplanation {

reason:string;

signals:string[];

}

