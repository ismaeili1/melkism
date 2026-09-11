export type CoreModuleStatus =
 | "active"
 | "inactive";


export interface CoreModuleDefinition {

 name:string;

 version:string;

 status:CoreModuleStatus;

 description:string;

}

