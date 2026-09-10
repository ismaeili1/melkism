import type {

AdaptivePolicy

} from "./policy.types";



export class AdaptivePolicyEngine {



private policies:
AdaptivePolicy[] = [];



create(

name:string,

rules:string[]

){


const policy:AdaptivePolicy={


id:
crypto.randomUUID(),


name,


rules,


status:
"active",


createdAt:
new Date()


};



this.policies.push(policy);


return policy;


}



disable(
policyId:string
){


const policy=

this.policies.find(

item=>

item.id===policyId

);



if(!policy){

throw new Error(
"Policy not found"
);

}



policy.status="inactive";


return policy;


}



getPolicies(){


return this.policies;


}



getActivePolicies(){


return this.policies.filter(

policy=>

policy.status==="active"

);


}



}



