import {
getRepositories
} from "./repository.registry";


export function findRepository(
id:string
){

return (
getRepositories()
.find(
repository=>repository.id===id
)
??
null
);

}

