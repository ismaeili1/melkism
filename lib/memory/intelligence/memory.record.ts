import type {
MemoryType,
MemoryMetadata
} from "./memory.types";



export interface MemoryRecord {


id:string;


type:
MemoryType;


content:
unknown;


metadata?:
MemoryMetadata;


createdAt:
Date;


}



