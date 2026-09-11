export interface IntelligenceModule {


name:string;


version:string;


initialize():Promise<void>;


execute(
context:unknown
):Promise<unknown>;


shutdown():Promise<void>;


}

