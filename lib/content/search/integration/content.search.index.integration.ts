/**
 * MELKISM Content Search Index Integration
 *
 * v0.3.0
 *
 * Connects Search with the Content Index Runtime.
 *
 * This integration layer does not depend on:
 * - a database
 * - a search engine
 * - an external service
 */

import type {
  ContentSearchRequest,
} from "../contracts";

import type {
  ContentIndexRuntime,
} from "../../indexing";


export class ContentSearchIndexIntegration {

  constructor(
    private readonly index: ContentIndexRuntime,
  ) {}

  async searchIndex(
    request: ContentSearchRequest,
  ) {

    if (!request.query) {
      return [];
    }

    const token = request.query.trim().toLowerCase();

    if (!token) {
      return [];
    }

    return this.index.find(token);
  }
}