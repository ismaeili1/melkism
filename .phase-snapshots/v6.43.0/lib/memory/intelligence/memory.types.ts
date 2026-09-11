export type MemoryType =

"conversation"

|

"context"

|

"knowledge"

|

"decision";



export interface MemoryMetadata {

source?:string;

tags?:string[];

}



