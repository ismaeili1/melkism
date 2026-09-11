export type ReportCategory =

| "market"
| "city"
| "country"
| "architecture"
| "research";


export interface ReportItem {

id:string;

title:string;

summary:string;

category:ReportCategory;

date:string;

premium?:boolean;

}