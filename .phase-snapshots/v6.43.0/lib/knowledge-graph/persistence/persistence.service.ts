/**
 * MELKISM v6.42.0
 * Persistence service foundation
 */

import type {
    PersistenceRepository
}
from "./persistence.repository";


export class KnowledgeGraphPersistenceService {


    constructor(
        private readonly repository:
        PersistenceRepository
    )
    {}


}

