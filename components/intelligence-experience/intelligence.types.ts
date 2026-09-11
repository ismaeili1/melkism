export type IntelligenceType =
| "market"
| "city"
| "country"
| "global";


export interface IntelligenceItem {

id?:string;

type?:IntelligenceType;

category:string;

title:string;

description:string;

metadata?:Record<string,unknown>;

}


export type IntelligenceCardType =
IntelligenceItem;