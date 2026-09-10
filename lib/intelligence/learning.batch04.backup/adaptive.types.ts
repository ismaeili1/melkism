export type AdaptiveAction =

"improve"

|

"maintain"

|

"retrain";



export interface AdaptiveState {


id:string;


agentId:string;


performance:number;


action:AdaptiveAction;


createdAt:Date;


}



export interface AdaptiveContext {


signals:number;


successRate:number;


createdAt:Date;


}



