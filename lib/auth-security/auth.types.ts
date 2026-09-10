export type Permission =
 | "read"
 | "write"
 | "manage";


export interface SessionRecord {

id:string;

userId:string;

expiresAt:string;

}


export interface AuthToken {

value:string;

userId:string;

createdAt:string;

}

