export interface IntelligenceApplicationRequest {

query:string;

context?:Record<string,unknown>;

}



export interface IntelligenceApplicationResponse {

success:boolean;

result:unknown;

}

