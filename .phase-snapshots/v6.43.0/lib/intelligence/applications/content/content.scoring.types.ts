export type ContentCategory =

"article"

|

"news"

|

"report"

|

"property"

|

"architecture"

|

"unknown";



export interface ContentScoreInput {


contentId:string;


text:string;


}



export interface ContentScoreResult {


contentId:string;


qualityScore:number;


confidence:number;


category:ContentCategory;


signals:string[];


createdAt:Date;


}

