
export type MemoryKind =
  | "entity"
  | "concept"
  | "event"
  | "relation";


export interface SemanticMemoryRecord {

 id:string;

 kind:MemoryKind;

 source:string;

 confidence:number;

 createdAt:string;

}


