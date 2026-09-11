export type AIMessageRole =

| "user"
| "assistant";


export interface AIMessage {

id:string;

role:AIMessageRole;

content:string;

timestamp:string;

}



export interface AIRecommendation {

id:string;

title:string;

description:string;

category:string;

}