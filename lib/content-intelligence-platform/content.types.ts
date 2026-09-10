export type ContentType =
 | "article"
 | "report"
 | "research"
 | "news"
 | "case-study"
 | "guide";


export interface ContentRecord {

id:string;

type:ContentType;

title:string;

}


export interface ContentClassification {

category:string;

confidence:number;

}


