import {
getEntities
} from "./entity.registry";


export function findEntity(
name:string
){

return (
getEntities()
.find(
entity =>
entity.name
.toLowerCase()
===
name.toLowerCase()
)
??
null
);

}

