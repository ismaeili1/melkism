export type ArchitectureSignalType =

"design"

|

"sustainability"

|

"quality"

|

"innovation";



export interface ArchitectureSignal {


id:string;


type:ArchitectureSignalType;


value:number;


source:string;


createdAt:Date;


}



export interface ArchitectureContext {


projectId:string;


signals:ArchitectureSignal[];


createdAt:Date;


}



export interface ArchitectureInsight {


id:string;


projectId:string;


designScore:number;


summary:string;


confidence:number;


createdAt:Date;


}



export type UrbanSignalType =

"growth"

|

"infrastructure"

|

"mobility"

|

"livability";



export interface UrbanSignal {


id:string;


type:UrbanSignalType;


value:number;


createdAt:Date;


}



export interface UrbanContext {


city:string;


signals:UrbanSignal[];


createdAt:Date;


}



export interface UrbanInsight {


id:string;


city:string;


urbanScore:number;


summary:string;


confidence:number;


createdAt:Date;


}

