import type {
RiskAssessment
} from "./investment.types";


export function analyzeRisk(
score:number
):RiskAssessment{


return {

level:
score>70
?"high"
:
score>40
?"medium"
:
"low",

score

};


}

