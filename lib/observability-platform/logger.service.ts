import type {
LogRecord
} from "./observability.types";


const logs:LogRecord[]=[];



export function log(
record:LogRecord
){

logs.push(record);

}



export function getLogs(){

return [...logs];

}

