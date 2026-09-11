/**
 * MELKISM v6.24.0
 * Knowledge Graph persistence repository.
 */

import { Prisma } from "@/prisma/generated/prisma/client";
import { getAuthPrisma } from "@/lib/auth/prisma";

import type {
  JsonRecord,
  KnowledgeNodeCreateInput,
  KnowledgeNodeListInput,
  KnowledgeNodeUpdateInput,
  KnowledgeRelationCreateInput,
  KnowledgeRelationListInput,
  KnowledgeRelationUpdateInput,
} from "@/lib/knowledge/graph.types";

function toPrismaJson(
  value: JsonRecord | undefined
): Prisma.InputJsonValue | undefined {

  if (value === undefined) {
    return undefined;
  }

  return JSON.parse(
    JSON.stringify(value)
  ) as Prisma.InputJsonValue;
}

function toPrismaDecimal(
  value: string | null | undefined
): Prisma.Decimal | null | undefined {

  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return new Prisma.Decimal(value);
}

export const graphRepository = {

  async listNodes(
    input: KnowledgeNodeListInput
  ) {

    const prisma = getAuthPrisma();

    const where: Prisma.KnowledgeNodeWhereInput = {};

    if (input.nodeType) {
      where.nodeType = input.nodeType;
    }

    const skip =
      (input.page - 1) *
      input.pageSize;

    const [items, total] =
      await Promise.all([
        prisma.knowledgeNode.findMany({
          where,
          orderBy: {
            createdAt: "desc",
          },
          skip,
          take: input.pageSize,
        }),
        prisma.knowledgeNode.count({
          where,
        }),
      ]);

    return {
      items,
      total,
    };
  },

  async findNodeById(
    id: string
  ) {

    const prisma = getAuthPrisma();

    return prisma.knowledgeNode.findUnique({
      where: {
        id,
      },
      include: {
        outgoing: true,
        incoming: true,
      },
    });
  },

  async createNode(
    input: KnowledgeNodeCreateInput
  ) {

    const prisma = getAuthPrisma();

    return prisma.knowledgeNode.create({
      data: {
        key: input.key,
        label: input.label,
        nodeType: input.nodeType,
        description: input.description,
        metadata: toPrismaJson(
          input.metadata
        ),
      },
    });
  },

  async updateNode(
    id: string,
    input: KnowledgeNodeUpdateInput
  ) {

    const prisma = getAuthPrisma();

    const data: Prisma.KnowledgeNodeUpdateInput = {
      key: input.key,
      label: input.label,
      nodeType: input.nodeType,
      description: input.description,
    };

    if (input.metadata !== undefined) {
      data.metadata = toPrismaJson(
        input.metadata
      );
    }

    return prisma.knowledgeNode.update({
      where: {
        id,
      },
      data,
    });
  },

  async deleteNode(
    id: string
  ) {

    const prisma = getAuthPrisma();

    return prisma.knowledgeNode.delete({
      where: {
        id,
      },
    });
  },

  async listRelations(
    input: KnowledgeRelationListInput
  ) {

    const prisma = getAuthPrisma();

    const where: Prisma.KnowledgeRelationWhereInput = {};

    if (input.fromNodeId) {
      where.fromNodeId = input.fromNodeId;
    }

    if (input.toNodeId) {
      where.toNodeId = input.toNodeId;
    }

    if (input.type) {
      where.type = input.type;
    }

    const skip =
      (input.page - 1) *
      input.pageSize;

    const [items, total] =
      await Promise.all([
        prisma.knowledgeRelation.findMany({
          where,
          orderBy: {
            createdAt: "desc",
          },
          skip,
          take: input.pageSize,
          include: {
            fromNode: true,
            toNode: true,
          },
        }),
        prisma.knowledgeRelation.count({
          where,
        }),
      ]);

    return {
      items,
      total,
    };
  },

  async findRelationById(
    id: string
  ) {

    const prisma = getAuthPrisma();

    return prisma.knowledgeRelation.findUnique({
      where: {
        id,
      },
      include: {
        fromNode: true,
        toNode: true,
      },
    });
  },

  async createRelation(
    input: KnowledgeRelationCreateInput
  ) {

    const prisma = getAuthPrisma();

    return prisma.knowledgeRelation.create({
      data: {
        fromNodeId: input.fromNodeId,
        toNodeId: input.toNodeId,
        type: input.type,
        weight: toPrismaDecimal(
          input.weight
        ),
        confidence: toPrismaDecimal(
          input.confidence
        ),
        metadata: toPrismaJson(
          input.metadata
        ),
      },
      include: {
        fromNode: true,
        toNode: true,
      },
    });
  },

  async updateRelation(
    id: string,
    input: KnowledgeRelationUpdateInput
  ) {

    const prisma = getAuthPrisma();

    const data: Prisma.KnowledgeRelationUpdateInput = {
      type: input.type,
      weight: toPrismaDecimal(
        input.weight
      ),
      confidence: toPrismaDecimal(
        input.confidence
      ),
    };

    if (input.metadata !== undefined) {
      data.metadata = toPrismaJson(
        input.metadata
      );
    }

    return prisma.knowledgeRelation.update({
      where: {
        id,
      },
      data,
      include: {
        fromNode: true,
        toNode: true,
      },
    });
  },

  async deleteRelation(
    id: string
  ) {

    const prisma = getAuthPrisma();

    return prisma.knowledgeRelation.delete({
      where: {
        id,
      },
    });
  },
};