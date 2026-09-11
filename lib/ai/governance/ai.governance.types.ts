export type AICapabilityStatus =
  | "registered"
  | "reviewed"
  | "approved"
  | "disabled";


export type AIExecutionLevel =
  | "none"
  | "evaluation"
  | "production";


export interface AICapability {

  id:string;

  name:string;

  status:AICapabilityStatus;

  execution:
  AIExecutionLevel;
}
