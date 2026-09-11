import type {

IntelligenceGoal,

IntelligencePlan

} from "./planner.types";



export class IntelligencePlanner {



private plans:
IntelligencePlan[] = [];



createPlan(
goal:IntelligenceGoal
){


const plan:IntelligencePlan={


id:
crypto.randomUUID(),


goal,


steps:[],


createdAt:
new Date()


};



this.plans.push(plan);


return plan;


}



addStep(
planId:string,
step:string
){


const plan =
this.plans.find(

item=>

item.id===planId

);



if(!plan){

throw new Error(
"Plan not found"
);

}



plan.steps.push(step);


return plan;


}



getPlans(){


return this.plans;


}



}


