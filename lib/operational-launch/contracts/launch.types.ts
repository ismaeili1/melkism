export interface LaunchStatus {

ready:boolean;

stage:string;

}


export interface OperationalCheck {

name:string;

passed:boolean;

}


export interface ReleaseGate {

approved:boolean;

reason:string;

}

