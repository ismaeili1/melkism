import type {

ConsensusContext,

ConsensusResult

} from "./consensus.types";



export class SwarmConsensusEngine {



evaluate(

context:ConsensusContext

):ConsensusResult {



const opinions=context.opinions;



const total=

opinions.reduce(

(sum,item)=>

sum+item.score,

0

);



const average=

opinions.length===0

?

0

:

total/opinions.length;



let decision:

"approve"

|

"reject"

|

"neutral";



if(average>=0.7){

decision="approve";

}

else if(average<=0.3){

decision="reject";

}

else{

decision="neutral";

}



return {


subject:context.subject,


agreement:average,


decision,


confidence:

opinions.length>0

?

Math.min(1,opinions.length/5)

:

0,


createdAt:new Date()


};



}



}

