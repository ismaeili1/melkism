export type ApiServiceStatus =
  | "active"
  | "inactive";


export interface ApiServiceDefinition {

  name:string;

  version:string;

  description:string;

  status:ApiServiceStatus;

  basePath:string;

}


