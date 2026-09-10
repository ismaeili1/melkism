import type {
 ApiVersionInfo,
} from "./api-version.types";


import {
 DEFAULT_API_VERSION,
} from "./api-version.constants";



export function getCurrentApiVersion():

ApiVersionInfo {


 return {

  version:DEFAULT_API_VERSION,

  active:true,

  deprecated:false,

 };


}

