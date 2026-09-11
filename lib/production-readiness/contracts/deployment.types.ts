export interface DeploymentContext {

environment:string;

version:string;

status:string;

}


export interface ReleaseMetadata {

version:string;

timestamp:string;

}


export interface RuntimeStatus {

healthy:boolean;

services:string[];

}

