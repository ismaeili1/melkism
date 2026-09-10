export type ApiVersion =
  | "v1"
  | "v2";


export interface ApiVersionInfo {

 version:ApiVersion;

 active:boolean;

 deprecated:boolean;

}


