/**
 * MELKISM Content Index Memory Persistence Adapter
 *
 * v0.3.1
 *
 * Development persistence implementation.
 *
 * This adapter does not know:
 *
 * - database
 * - ORM
 * - external storage
 */

import type {
  ContentIndexPersistenceContract,
} from "../../contracts";


import type {
  ContentIndexEntry,
} from "../../contracts/content.index.contract";



export class ContentIndexMemoryPersistenceAdapter
implements ContentIndexPersistenceContract {



private readonly records =
new Map<string, ContentIndexEntry>();



async save(
 entry: ContentIndexEntry
):
Promise<ContentIndexEntry>{

 this.records.set(
   entry.id,
   entry
 );

 return entry;

}



async findById(
 id:string
):
Promise<ContentIndexEntry | undefined>{

 return this.records.get(id);

}



async delete(
 id:string
):
Promise<boolean>{

 return this.records.delete(id);

}



async list():
Promise<readonly ContentIndexEntry[]>{

 return Array.from(
   this.records.values()
 );

}



async exists(
 id:string
):
Promise<boolean>{

 return this.records.has(id);

}


}
