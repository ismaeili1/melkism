import type {

LearningRecord

} from "./learning.model";



export class IntelligenceLearningEngine {



private records:
LearningRecord[] = [];



learn(
record:LearningRecord
){


this.records.push(record);


return record;


}



getLearningRecords(){


return this.records;


}



getLatest(){


return this.records[
this.records.length - 1
];


}



}


