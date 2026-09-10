/**
 * MELKISM Learning Memory Ranking
 * v38.20.14
 *
 * Knowledge ranking foundation
 */


import type {
LearningMemoryRecord
} from "./learning.memory.types";



export interface LearningMemoryRankedRecord {


record:
LearningMemoryRecord;


score:
number;


reason?:
string;


}



export class LearningMemoryRankingService {



rank(
records:LearningMemoryRecord[]
):LearningMemoryRankedRecord[]{


return records.map(

record => ({

record,

score:
this.calculateScore(record)

})

);


}



sort(
records:LearningMemoryRankedRecord[]
){


return records.sort(

(a,b)=>
b.score-a.score

);


}



private calculateScore(
record:LearningMemoryRecord
){


let score=0;



if(record.success){

score += 1;

}


return score;

}



}