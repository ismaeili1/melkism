/**
 * MELKISM v6.42.0
 * Persistence repository foundation
 */

import type {
    KnowledgeGraphNodeRecord
}
from "./persistence.types";


export interface PersistenceRepository {


    saveNode(
        node:
        KnowledgeGraphNodeRecord
    ):
    Promise<void>;


    findNode(
        id:
        string
    ):
    Promise<KnowledgeGraphNodeRecord | null>;

}

