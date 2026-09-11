export interface UserProfileRecord {

id:string;

userId:string;

name:string;

bio:string;

location?:string;

language:string;

createdAt:string;

}


export interface ProfessionalProfile {

userId:string;

title:string;

expertise:string[];

}


export interface ActivityProfile {

userId:string;

actions:string[];

}

