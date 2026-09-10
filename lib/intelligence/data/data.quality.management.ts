/**
 * MELKISM Data Quality Management
 * v38.20.14
 */


export interface QualityRecord {


data:unknown;

score:number;

createdAt:Date;

}



export class DataQualityManagement {


private history:
QualityRecord[] = [];



validateQuality(

data:unknown

){


const record:
QualityRecord = {


data,

score:100,

createdAt:new Date()


};


this.history.push(record);


return record;


}



calculateQualityScore(

data:unknown

){


return 100;


}



getQualityHistory(){


return this.history;


}


}
