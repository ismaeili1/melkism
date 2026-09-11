"use strict";
/**
 * MELKISM Retrieval Orchestration
 *
 * v0.3.2
 *
 * Coordinates:
 *
 * - Search
 * - Index
 * - Filtering
 * - Ranking
 *
 * This layer does not know
 * concrete implementations.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRetrievalOrchestrator = void 0;
class ContentRetrievalOrchestrator {
    constructor(dependencies) {
        this.dependencies = dependencies;
    }
    async execute(request) {
        await this.dependencies.index.index(request);
        return this.dependencies.search.search(request);
    }
}
exports.ContentRetrievalOrchestrator = ContentRetrievalOrchestrator;
