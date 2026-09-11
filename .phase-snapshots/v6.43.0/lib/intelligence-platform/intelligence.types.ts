export type IntelligenceStatus =
  | "active"
  | "inactive";


export interface IntelligenceModule {

 id:string;

 name:string;

 version:string;

 status:IntelligenceStatus;

 description:string;

 capabilities:string[];

}

