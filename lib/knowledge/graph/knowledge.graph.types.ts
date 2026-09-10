import type {
KnowledgeEntity
} from "../entities/knowledge.entity.types";


import type {
KnowledgeRelation
} from "../relations/knowledge.relation.types";


export interface KnowledgeGraph {

nodes:KnowledgeEntity[];

edges:KnowledgeRelation[];

}

