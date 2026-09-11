/**
 * MELKISM v6.24.0
 * Knowledge Graph application service.
 */

import { graphRepository } from "@/lib/knowledge/graph.repository";

import type {
  KnowledgeNodeCreateInput,
  KnowledgeNodeListInput,
  KnowledgeNodeUpdateInput,
  KnowledgeRelationCreateInput,
  KnowledgeRelationListInput,
  KnowledgeRelationUpdateInput,
} from "@/lib/knowledge/graph.types";

export const graphService = {

  async listNodes(
    input: KnowledgeNodeListInput
  ) {

    const result =
      await graphRepository.listNodes(
        input
      );

    return {
      items: result.items,
      total: result.total,
      page: input.page,
      pageSize: input.pageSize,
    };
  },

  async getNode(
    id: string
  ) {
    return graphRepository.findNodeById(
      id
    );
  },

  async createNode(
    input: KnowledgeNodeCreateInput
  ) {
    return graphRepository.createNode(
      input
    );
  },

  async updateNode(
    id: string,
    input: KnowledgeNodeUpdateInput
  ) {
    return graphRepository.updateNode(
      id,
      input
    );
  },

  async deleteNode(
    id: string
  ) {
    return graphRepository.deleteNode(
      id
    );
  },

  async listRelations(
    input: KnowledgeRelationListInput
  ) {

    const result =
      await graphRepository.listRelations(
        input
      );

    return {
      items: result.items,
      total: result.total,
      page: input.page,
      pageSize: input.pageSize,
    };
  },

  async getRelation(
    id: string
  ) {
    return graphRepository.findRelationById(
      id
    );
  },

  async createRelation(
    input: KnowledgeRelationCreateInput
  ) {
    return graphRepository.createRelation(
      input
    );
  },

  async updateRelation(
    id: string,
    input: KnowledgeRelationUpdateInput
  ) {
    return graphRepository.updateRelation(
      id,
      input
    );
  },

  async deleteRelation(
    id: string
  ) {
    return graphRepository.deleteRelation(
      id
    );
  },
};