/**
 * MELKISM Intelligence Runtime Event Automation
 */



export interface RuntimeEventAutomation {


event:string;


action:string;


createdAt:string;


}



const automationRules:
RuntimeEventAutomation[]=[];



export function registerAutomationRule(
event:string,
action:string
){


const rule:RuntimeEventAutomation={

event,

action,

createdAt:
new Date().toISOString()

};


automationRules.push(rule);


return rule;

}



export function automateRuntimeEvent(
event:string
){


return automationRules.filter(

rule=>rule.event===event

);

}



export function getAutomationRules(){

return automationRules;

}



export function clearAutomationRules(){

automationRules.length=0;

}

