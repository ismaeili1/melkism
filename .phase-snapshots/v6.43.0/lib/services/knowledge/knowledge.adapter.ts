import type {
KnowledgeServiceResult
} from "./knowledge.types";


export class KnowledgeAdapter {


adapt(
data:{
id:string;
content:string;
source:string;
}
):KnowledgeServiceResult{


return {

id:data.id,

content:data.content,

source:data.source

};


}


}

