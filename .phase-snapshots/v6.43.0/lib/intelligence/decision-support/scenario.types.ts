export type ScenarioType =

"market"

|

"investment"

|

"property"

|

"urban"

|

"architecture";



export interface ScenarioVariable {


id:string;


name:string;


value:number;


unit:string;


createdAt:Date;


}



export interface ScenarioContext {


id:string;


type:ScenarioType;


variables:ScenarioVariable[];


createdAt:Date;


}



export interface ScenarioResult {


id:string;


scenarioId:string;


impact:number;


summary:string;


confidence:number;


createdAt:Date;


}

