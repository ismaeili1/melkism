export interface AccessContext {

userId:string;

role:string;

}


export interface Permission {

name:string;

enabled:boolean;

}


export interface AccessResult {

allowed:boolean;

reason:string;

}

