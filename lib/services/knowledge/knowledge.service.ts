import {
KnowledgeAdapter
} from "./knowledge.adapter";


export class KnowledgeService {


private adapter =
new KnowledgeAdapter();



resolve(
id:string,
content:string,
source:string
){


return this.adapter.adapt({

id,

content,

source

});


}


}

