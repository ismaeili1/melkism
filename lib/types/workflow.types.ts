import type {
MELKISMInput,
MELKISMOutput,
MELKISMRecord
} from "./common.types";


export interface WorkflowContext {

input:
MELKISMInput;


metadata?:
MELKISMRecord;

}


export interface WorkflowResult {

output:
MELKISMOutput;


success:
boolean;

}
