export type SearchCategory =
| "knowledge"
| "market"
| "property"
| "architecture"
| "city"
| "report";


export interface SearchItem {

id:string;

title:string;

description:string;

category:SearchCategory;

}