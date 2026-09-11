import type {

SemanticLink,

SemanticRelationType

} from "./semantic.types";



export class SemanticEngine {



private links:
SemanticLink[] = [];



createLink(

source:string,

target:string,

type:SemanticRelationType,

confidence:number

){


const link:SemanticLink={


id:
crypto.randomUUID(),


source,


target,


type,


confidence,


createdAt:
new Date()


};



this.links.push(link);


return link;


}



findRelated(

concept:string

){


return this.links.filter(

link=>

link.source===concept ||

link.target===concept

);


}



getLinks(){


return this.links;


}



}



