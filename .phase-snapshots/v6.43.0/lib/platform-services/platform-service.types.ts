export type PlatformServiceStatus =
 | "running"
 | "stopped";


export interface PlatformService {

 id:string;

 name:string;

 version:string;

 status:PlatformServiceStatus;

 description:string;

}


