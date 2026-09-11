import type {

IntelligenceGovernanceRecord,

IntelligenceGovernanceResult

} from "./intelligence.governance.types";



export class IntelligenceGovernanceCore {



evaluate(

domain:string,

entityId:string,

score:number

):IntelligenceGovernanceResult {



let decision:

"approve"

|

"review"

|

"reject";



let level:

"automatic"

|

"assisted"

|

"manual";



if(score>=80){


decision="approve";


level="automatic";


}

else if(score>=50){


decision="review";


level="assisted";


}

else{


decision="reject";


level="manual";


}



const record:IntelligenceGovernanceRecord={


id:crypto.randomUUID(),


domain,


entityId,


decision,


level,


reason:

"autonomous intelligence governance evaluation",


createdAt:new Date()


};



return {


entityId,


decision,


level,


record,


createdAt:new Date()


};



}



}

