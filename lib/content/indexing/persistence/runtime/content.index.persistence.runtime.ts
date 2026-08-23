/**
 * MELKISM Content Index Persistence Runtime
 *
 * v0.3.1
 */


import type {
 ContentIndexPersistenceContract,
} from "../../contracts";


import type {
 ContentIndexEntry,
} from "../../contracts/content.index.contract";



export class ContentIndexPersistenceRuntime {



constructor(
 private readonly persistence:
 ContentIndexPersistenceContract
){}



async save(
 entry:ContentIndexEntry
){

 return this.persistence.save(entry);

}



async findById(
 id:string
){

 return this.persistence.findById(id);

}



async delete(
 id:string
){

 return this.persistence.delete(id);

}



async list(){

 return this.persistence.list();

}



async exists(
 id:string
){

 return this.persistence.exists(id);

}


}
