import type {
RepositoryDefinition
} from "./repository.types";


const repositories:
RepositoryDefinition[]=[];



export function registerRepository(
repository:RepositoryDefinition
){

const exists =
repositories.some(
item=>item.id===repository.id
);


if(!exists){

repositories.push(repository);

}

}



export function getRepositories(){

return [...repositories];

}


