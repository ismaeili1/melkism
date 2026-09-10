import type {
AIExecutionContext
} from "./orchestration.types";


export function executeWorkflow(
context:AIExecutionContext
){

return {

...context,

completed:true

};

}

