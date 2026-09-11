export type IntelligenceActivationState =
  | "CREATED"
  | "REGISTERED"
  | "INITIALIZED"
  | "ACTIVE"
  | "FAILED";


export interface IntelligenceActivationResult {

 state: IntelligenceActivationState;

 timestamp:string;

}

