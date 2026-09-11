import {
 SUPPORTED_API_VERSIONS,
} from "./api-version.constants";


export function isSupportedApiVersion(
 version:string
){

 return SUPPORTED_API_VERSIONS.includes(
   version as never
 );

}


export function normalizeApiVersion(
 version?:string
){

 if(
 version
 &&
 isSupportedApiVersion(version)
 ){

 return version;

 }


 return "v1";

}

