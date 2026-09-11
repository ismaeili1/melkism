export interface ProcessingResult {

status:
"pending"
|
"completed"
|
"failed";


processedAt?:Date;

output?:unknown;

}

