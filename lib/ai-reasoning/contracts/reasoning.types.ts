export type ReasoningMode =
  | "deductive"
  | "semantic"
  | "contextual";


export interface ReasoningInput {

  entityId:string;

  context:string[];

  confidence:number;

}


export interface ReasoningResult {

  conclusion:string;

  confidence:number;

  mode:ReasoningMode;

}

