import type {
ContentIntelligence
} from "./content.intelligence.types";


export function validateContentIntelligence(

content:ContentIntelligence

):boolean {


return Boolean(

content.id &&
content.title &&
content.type

);

}

