import type {
 InferenceRule,
 InferenceResult
}
from "./inference.types";


export function runInference(
 input:string,
 rules:InferenceRule[]
):InferenceResult {


const rule=
rules.find(
 item =>
 input.includes(item.condition)
);


if(!rule){

return {

matched:false,

score:0

};

}


return {

matched:true,

conclusion:rule.conclusion,

score:rule.weight

};


}

