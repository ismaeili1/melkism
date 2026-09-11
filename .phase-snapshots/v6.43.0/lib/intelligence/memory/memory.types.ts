export type MemoryType =

"short-term"

|

"long-term"

|

"knowledge";



export interface IntelligenceMemory {


id:string;


type:MemoryType;



title?:string;


key?:string;



content?:unknown;



description?:string;



value?:unknown;



importance:number;



createdAt:Date;



updatedAt?:Date;


}



export type MemoryEntity = IntelligenceMemory;


