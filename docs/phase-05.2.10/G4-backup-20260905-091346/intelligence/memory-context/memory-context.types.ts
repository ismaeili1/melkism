export type MemoryContextType =

"historical"

|

"decision"

|

"learning";



export interface MemoryContext {


id:string;


type:MemoryContextType;


memories:string[];


experiences:string[];


createdAt:Date;


}



