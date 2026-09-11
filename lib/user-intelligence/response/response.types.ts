export type IntelligenceStatus=

 | "ready"
 | "review"
 | "blocked";


export interface IntelligenceResponse {

answer:string;

confidence:number;

status:IntelligenceStatus;

}


