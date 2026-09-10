import type {
ContentRecord
} from "./content.types";


const contents:ContentRecord[]=[];



export function registerContent(
content:ContentRecord
){

if(
!contents.some(
item=>item.id===content.id
)
){

contents.push(content);

}

}



export function getContents(){

return [...contents];

}

