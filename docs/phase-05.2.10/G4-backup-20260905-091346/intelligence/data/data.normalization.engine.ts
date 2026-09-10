/**
 * MELKISM Data Normalization Engine
 * v38.20.14
 */


export interface NormalizationRecord {


input:unknown;

output:unknown;

createdAt:Date;

}



export class DataNormalizationEngine {


private history:
NormalizationRecord[] = [];



normalizeData(

input:unknown

){


const record:
NormalizationRecord = {


input,

output:input,

createdAt:new Date()


};


this.history.push(record);


return record;


}



validateSchema(

data:unknown

){


return {


valid:true,

data


};


}



getNormalizationHistory(){


return this.history;


}


}
