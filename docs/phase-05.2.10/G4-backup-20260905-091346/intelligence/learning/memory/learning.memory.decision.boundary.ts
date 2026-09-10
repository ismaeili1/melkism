/**
 * MELKISM Learning Memory Decision Boundary
 * v38.20.14
 *
 * Intelligence decision layer
 */



export interface LearningMemoryDecisionResult {


score:number;


accepted:boolean;


createdAt:Date;


}




export class LearningMemoryDecisionBoundary {



private history:
LearningMemoryDecisionResult[]=[];





evaluate(
signal:number
){


const score =
this.calculateDecisionScore(
signal
);



const result={


score,


accepted:
score >= 0.5,


createdAt:
new Date()


};



this.history.push(
result
);



return result;


}





calculateDecisionScore(
signal:number
){


return Math.max(

0,

Math.min(

1,

signal

)

);


}





getDecisionHistory(){


return this.history;


}



}
