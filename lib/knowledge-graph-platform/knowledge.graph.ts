import {
getEntities,
} from "./entity.registry";


import {
getRelations
} from "./relation.registry";



export function getKnowledgeGraph(){


return {

entities:
getEntities(),

relations:
getRelations()

};


}


