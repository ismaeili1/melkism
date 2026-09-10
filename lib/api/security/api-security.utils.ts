export function createSecurityContext(){


 return {

  requestId:
   crypto.randomUUID(),

  securityLevel:
   "public" as const,

  authenticated:false,

 };


}


export function validateApiKey(
 key:string | undefined
){

 return typeof key === "string"
 && key.trim().length > 0;

}

