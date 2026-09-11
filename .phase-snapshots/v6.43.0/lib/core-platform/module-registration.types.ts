export type PlatformModuleStatus =
 | "enabled"
 | "disabled";


export interface PlatformModule {

 id:string;

 name:string;

 version:string;

 status:PlatformModuleStatus;

 description:string;

}

