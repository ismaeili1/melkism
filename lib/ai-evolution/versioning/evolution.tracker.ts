import type {

KnowledgeChange

} from "../contracts/evolution.types";


export function trackKnowledgeChange(

change:KnowledgeChange

){

return {

accepted:true,

change

};

}


