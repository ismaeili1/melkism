import {
 createSecurityContext,
} from "./api-security.utils";


import type {
 ApiSecurityContext,
} from "./api-security.types";



export function createApiSecurityContext():

ApiSecurityContext {


 return createSecurityContext();

}

