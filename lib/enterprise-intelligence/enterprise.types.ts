
export interface Organization {

id:string;

name:string;

industry:string;

}


export interface Workspace {

id:string;

organizationId:string;

name:string;

}


export interface EnterpriseRole {

name:string;

permissions:string[];

}


