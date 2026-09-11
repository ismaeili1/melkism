/**
 * MELKISM Learning Memory Contract
 * v38.20.14
 */


export interface LearningMemoryRecord {


id:string;


experienceId:string;


agentId:string;


type:string;


input:string;


output:string;


success:boolean;


createdAt:Date;


}



export interface LearningMemoryStore {


save(
record:LearningMemoryRecord
):
LearningMemoryRecord;



findById(
id:string
):
LearningMemoryRecord | undefined;



findAll():
LearningMemoryRecord[];


}
