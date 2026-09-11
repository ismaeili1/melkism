import type {

OptimizationRule,

OptimizationType

} from "./optimization.types";



export class OptimizationEngine {



private rules:OptimizationRule[] = [];



create(

signalId:string,

type:OptimizationType,

priority:number,

action:string

){


const rule:OptimizationRule={


id:crypto.randomUUID(),


signalId,


type,


priority,


action,


createdAt:new Date()


};



this.rules.push(rule);


return rule;

}



getByPriority(

minimum:number

){


return this.rules.filter(

rule=>

rule.priority>=minimum

);


}



getAll(){

return this.rules;

}



}

