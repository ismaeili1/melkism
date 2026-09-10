
export type IntelligenceRuntimeStatus =
"active"
|
"inactive"
|
"error";



export interface IntelligenceRuntimeModule {


 id:string;


 version:string;


 status:IntelligenceRuntimeStatus;


 execute:
 (
 input:unknown
 )
 =>
 Promise<unknown>;


}


