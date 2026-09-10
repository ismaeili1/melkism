export type UserRole =
 | "user"
 | "professional"
 | "agent"
 | "architect"
 | "researcher"
 | "admin";


export interface UserRecord {

id:string;

name:string;

email:string;

role:UserRole;

status:"active"|"inactive";

createdAt:string;

}


export interface UserProfile {

userId:string;

bio?:string;

preferences:string[];

}

