export type ApiSecurityLevel =
  | "public"
  | "protected"
  | "private";


export interface ApiSecurityContext {

  requestId:string;

  securityLevel:ApiSecurityLevel;

  authenticated:boolean;

  consumerId?:string;

}


export interface ApiKeyRecord {

 id:string;

 name:string;

 active:boolean;

 createdAt:string;

}

