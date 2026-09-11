export interface DecisionInput {

context:string;

criteria:string[];

}



export interface DecisionResult {

decision:string;

confidence:number;

metadata?:Record<string,unknown>;

}

