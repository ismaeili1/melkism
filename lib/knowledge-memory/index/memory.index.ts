
import type {
 MemoryIndex,
 MemoryIndexEntry
} from "./memory-index.types";


export function createMemoryIndex(
 entries:MemoryIndexEntry[]
):MemoryIndex {

 return {
  entries
 };

}


