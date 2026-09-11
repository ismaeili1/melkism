export type ContentIntelligenceType =

| "article"
| "news"
| "report"
| "research"
| "market_analysis"
| "architecture_study"
| "data_insight";


export type IntelligenceLevel =

| "basic"
| "analyzed"
| "semantic"
| "intelligent";


export type IntelligenceDomain =

| "real_estate"
| "architecture"
| "urbanism"
| "sustainability"
| "technology"
| "ai"
| "investment";


export interface ContentIntelligence {

id:string;

title:string;

type:ContentIntelligenceType;

domain: IntelligenceDomain[];

topics:string[];

entities:string[];

importance:number;

intelligenceLevel:IntelligenceLevel;

}

