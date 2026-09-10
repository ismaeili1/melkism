export type NotificationType =
 | "system"
 | "security"
 | "recommendation"
 | "market";


export interface NotificationRecord {

id:string;

userId:string;

type:NotificationType;

title:string;

message:string;

createdAt:string;

}


export interface MessageRecord {

id:string;

from:string;

to:string;

content:string;

createdAt:string;

}

