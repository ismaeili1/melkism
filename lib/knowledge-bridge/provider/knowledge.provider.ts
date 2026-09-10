import type {
KnowledgeContext
} from "../context";


export interface KnowledgeProvider {

getContext(id:string):
Promise<KnowledgeContext | null>;


search(query:string):
Promise<KnowledgeContext[]>;

}

