/**
 * MELKISM Data Classification Engine
 * v38.20.14
 */


export interface ClassificationRecord {


data:unknown;

domain:string;

createdAt:Date;

}



export class DataClassificationEngine {


private history:
ClassificationRecord[] = [];



classifyData(

data:unknown,

domain:string

){


const record:
ClassificationRecord = {


data,

domain,

createdAt:new Date()


};


this.history.push(record);


return record;


}



detectDomain(

data:unknown

){


return {


domain:"unknown",

data


};


}



getClassificationHistory(){


return this.history;


}


}
