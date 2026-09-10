import {
validateLearningContractFlow
} from "./learning.contract.integration.validator";


const result =
validateLearningContractFlow();


console.log(
JSON.stringify(
result,
null,
2
)
);
