import type {

IntelligenceImprovement

} from "./improvement.types";



export class SelfImprovementEngine {



private improvements:
IntelligenceImprovement[] = [];



propose(
description:string,
impact:number
){


const improvement:IntelligenceImprovement={


id:
crypto.randomUUID(),


type:
"optimization",


description,


impact,


createdAt:
new Date()


};



this.improvements.push(improvement);


return improvement;


}



getImprovements(){


return this.improvements;


}



getBestImprovement(){


return this.improvements.sort(

(a,b)=>

b.impact-a.impact

)[0];


}



}


