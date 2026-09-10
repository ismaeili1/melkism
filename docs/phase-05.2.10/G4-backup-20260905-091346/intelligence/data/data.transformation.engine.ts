/**
 * MELKISM Data Transformation Engine
 * v38.20.14
 */


export interface TransformationRecord {


input:unknown;

output:unknown;

rule:string;

createdAt:Date;

}



export class DataTransformationEngine {


private history:
TransformationRecord[] = [];



transformData(

input:unknown,

rule:string

){


const record:
TransformationRecord = {


input,

output:input,

rule,

createdAt:new Date()


};


this.history.push(record);


return record;


}



applyRule(

data:unknown,

rule:string

){


return this.transformData(

data,

rule

);


}



getTransformationHistory(){


return this.history;


}


}
