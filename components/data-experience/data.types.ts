export type DataCategory =

| "market"
| "city"
| "country"
| "architecture"
| "real-estate";


export interface DataMetric {

id:string;

title:string;

value:string;

unit?:string;

trend?:string;

category:DataCategory;

description:string;

}


export interface DataInsight {

title:string;

description:string;

source?:string;

}