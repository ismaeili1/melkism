export type IntelligenceModuleStatus =
  | "active"
  | "inactive"
  | "experimental"
  | "deprecated";


export type IntelligenceModuleCategory =
  | "core"
  | "agent"
  | "knowledge"
  | "decision"
  | "learning"
  | "runtime";


export interface IntelligenceModuleContract {

  id:string;

  name:string;

  version:string;

  category:IntelligenceModuleCategory;

  status:IntelligenceModuleStatus;


  execute(
    input:unknown
  ):Promise<unknown>;


  healthCheck():
  Promise<boolean>;

}

