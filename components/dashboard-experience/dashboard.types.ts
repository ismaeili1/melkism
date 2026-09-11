export type DashboardMetric = {

label:string;

value:string;

change?:string;

trend?:
"up"
|
"down"
|
"neutral";

};



export type DashboardInsight = {

title:string;

description:string;

category:string;

};