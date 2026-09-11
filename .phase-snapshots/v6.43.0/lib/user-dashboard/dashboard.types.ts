export interface DashboardRecord {

id:string;

userId:string;

title:string;

createdAt:string;

}


export interface WorkspaceRecord {

userId:string;

widgets:string[];

}


export interface ActivityRecord {

userId:string;

action:string;

timestamp:string;

}

