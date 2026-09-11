
import type {

IntelligenceRuntimeStatus

}

from "../runtime";



export interface IntelligenceModule {



id:string;


name:string;


version:string;



status:IntelligenceRuntimeStatus;



initialize():
Promise<void>;



execute(
input:unknown
):
Promise<unknown>;



}



