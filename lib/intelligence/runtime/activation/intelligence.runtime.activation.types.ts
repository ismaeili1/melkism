export type IntelligenceRuntimeActivationStatus =
"activated" |
"failed";


export interface IntelligenceRuntimeActivationResult {

 status:
 IntelligenceRuntimeActivationStatus;

 timestamp:string;

 modules:number;

}

