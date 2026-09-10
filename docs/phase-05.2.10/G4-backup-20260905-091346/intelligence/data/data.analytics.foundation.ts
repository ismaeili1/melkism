/**
 * MELKISM Data Analytics Foundation
 * v38.20.14
 */


export interface AnalyticsRecord {


subject:string;

result:unknown;

createdAt:Date;

}



export class DataAnalyticsFoundation {


private history:
AnalyticsRecord[] = [];



createAnalysis(

subject:string,

result:unknown

){


const record:
AnalyticsRecord = {


subject,

result,

createdAt:new Date()


};


this.history.push(record);


return record;


}



analyzeData(

subject:string,

data:unknown

){


return this.createAnalysis(

subject,

data

);


}



getAnalyticsHistory(){


return this.history;


}


}
