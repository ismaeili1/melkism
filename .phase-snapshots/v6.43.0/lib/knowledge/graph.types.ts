/**
 * MELKISM v6.24.0
 * Knowledge Graph persistence types.
 */

import {
  KnowledgeNodeType,
  KnowledgeRelationType,
} from "@/prisma/generated/prisma/client";

import {
  requirePositiveInteger,
  requireString,
} from "@/lib/api/core/validation";

export type JsonRecord = Record<string, unknown>;

export type KnowledgeNodeCreateInput = {
  key: string;
  label: string;
  nodeType: KnowledgeNodeType;
  description?: string | null;
  metadata?: JsonRecord;
};

export type KnowledgeNodeUpdateInput = {
  key?: string;
  label?: string;
  nodeType?: KnowledgeNodeType;
  description?: string | null;
  metadata?: JsonRecord;
};

export type KnowledgeRelationCreateInput = {
  fromNodeId: string;
  toNodeId: string;
  type: KnowledgeRelationType;
  weight?: string | null;
  confidence?: string | null;
  metadata?: JsonRecord;
};

export type KnowledgeRelationUpdateInput = {
  type?: KnowledgeRelationType;
  weight?: string | null;
  confidence?: string | null;
  metadata?: JsonRecord;
};

export type KnowledgeNodeListInput = {
  page: number;
  pageSize: number;
  nodeType?: KnowledgeNodeType;
};

export type KnowledgeRelationListInput = {
  page: number;
  pageSize: number;
  fromNodeId?: string;
  toNodeId?: string;
  type?: KnowledgeRelationType;
};

export function parseNodeType(
  value: string | null
): KnowledgeNodeType | undefined {

  if (value === null || value.trim().length === 0) {
    return undefined;
  }

  const allowed: KnowledgeNodeType[] = [
    "CONCEPT",
    "ENTITY",
    "LOCATION",
    "PROPERTY",
    "ORGANIZATION",
    "PERSON",
    "METRIC",
    "TOPIC",
  ];

  if (!allowed.includes(value as KnowledgeNodeType)) {
    throw new Error("INVALID_KNOWLEDGE_NODE_TYPE");
  }

  return value as KnowledgeNodeType;
}

export function parseRelationType(
  value: string | null
): KnowledgeRelationType | undefined {

  if (value === null || value.trim().length === 0) {
    return undefined;
  }

  const allowed: KnowledgeRelationType[] = [
    "RELATED_TO",
    "PART_OF",
    "LOCATED_IN",
    "DERIVED_FROM",
    "SUPPORTS",
    "CONTRADICTS",
    "REFERENCES",
  ];

  if (!allowed.includes(value as KnowledgeRelationType)) {
    throw new Error("INVALID_KNOWLEDGE_RELATION_TYPE");
  }

  return value as KnowledgeRelationType;
}

function parseMetadata(
  value: unknown
): JsonRecord | undefined {

  if (value === undefined) {
    return undefined;
  }

  if (
    value === null ||
    typeof value !== "object" ||
    Array.isArray(value)
  ) {
    throw new Error("INVALID_METADATA");
  }

  return value as JsonRecord;
}

function parseDecimalText(
  value: unknown,
  field: string,
  min: number,
  max: number
): string | null | undefined {

  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  const text = requireString(String(value), field);
  const numeric = Number(text);

  if (
    !Number.isFinite(numeric) ||
    numeric < min ||
    numeric > max
  ) {
    throw new Error(
      `INVALID_${field.toUpperCase()}`
    );
  }

  return text;
}

export function parseNodeCreateInput(
  body: Record<string, unknown>
): KnowledgeNodeCreateInput {

  const nodeType = parseNodeType(
    requireString(body.nodeType, "nodeType")
  );

  if (!nodeType) {
    throw new Error("INVALID_KNOWLEDGE_NODE_TYPE");
  }

  return {
    key: requireString(body.key, "key"),
    label: requireString(body.label, "label"),
    nodeType,
    description:
      body.description === undefined
        ? undefined
        : body.description === null
          ? null
          : String(body.description),
    metadata: parseMetadata(body.metadata),
  };
}

export function parseNodeUpdateInput(
  body: Record<string, unknown>
): KnowledgeNodeUpdateInput {

  const result: KnowledgeNodeUpdateInput = {};

  if (body.key !== undefined) {
    result.key = requireString(body.key, "key");
  }

  if (body.label !== undefined) {
    result.label = requireString(body.label, "label");
  }

  if (body.nodeType !== undefined) {
    result.nodeType = parseNodeType(
      requireString(body.nodeType, "nodeType")
    );
  }

  if (body.description !== undefined) {
    result.description =
      body.description === null
        ? null
        : String(body.description);
  }

  if (body.metadata !== undefined) {
    result.metadata = parseMetadata(body.metadata);
  }

  return result;
}

export function parseNodeListInput(
  url: URL
): KnowledgeNodeListInput {

  const pageText = url.searchParams.get("page");
  const pageSizeText = url.searchParams.get("pageSize");

  const page =
    pageText === null
      ? 1
      : requirePositiveInteger(pageText, "page");

  const pageSize =
    pageSizeText === null
      ? 20
      : requirePositiveInteger(
          pageSizeText,
          "pageSize"
        );

  if (pageSize > 100) {
    throw new Error("INVALID_PAGE_SIZE");
  }

  return {
    page,
    pageSize,
    nodeType: parseNodeType(
      url.searchParams.get("nodeType")
    ),
  };
}

export function parseRelationCreateInput(
  body: Record<string, unknown>
): KnowledgeRelationCreateInput {

  const relationType = parseRelationType(
    requireString(body.type, "type")
  );

  if (!relationType) {
    throw new Error(
      "INVALID_KNOWLEDGE_RELATION_TYPE"
    );
  }

  const fromNodeId = requireString(
    body.fromNodeId,
    "fromNodeId"
  );

  const toNodeId = requireString(
    body.toNodeId,
    "toNodeId"
  );

  if (fromNodeId === toNodeId) {
    throw new Error("INVALID_SELF_RELATION");
  }

  return {
    fromNodeId,
    toNodeId,
    type: relationType,
    weight: parseDecimalText(
      body.weight,
      "weight",
      -1000000,
      1000000
    ),
    confidence: parseDecimalText(
      body.confidence,
      "confidence",
      0,
      1
    ),
    metadata: parseMetadata(body.metadata),
  };
}

export function parseRelationUpdateInput(
  body: Record<string, unknown>
): KnowledgeRelationUpdateInput {

  const result: KnowledgeRelationUpdateInput = {};

  if (body.type !== undefined) {
    result.type = parseRelationType(
      requireString(body.type, "type")
    );
  }

  if (body.weight !== undefined) {
    result.weight = parseDecimalText(
      body.weight,
      "weight",
      -1000000,
      1000000
    );
  }

  if (body.confidence !== undefined) {
    result.confidence = parseDecimalText(
      body.confidence,
      "confidence",
      0,
      1
    );
  }

  if (body.metadata !== undefined) {
    result.metadata = parseMetadata(body.metadata);
  }

  return result;
}

export function parseRelationListInput(
  url: URL
): KnowledgeRelationListInput {

  const pageText = url.searchParams.get("page");
  const pageSizeText = url.searchParams.get("pageSize");

  const page =
    pageText === null
      ? 1
      : requirePositiveInteger(pageText, "page");

  const pageSize =
    pageSizeText === null
      ? 20
      : requirePositiveInteger(
          pageSizeText,
          "pageSize"
        );

  if (pageSize > 100) {
    throw new Error("INVALID_PAGE_SIZE");
  }

  return {
    page,
    pageSize,
    fromNodeId:
      url.searchParams.get("fromNodeId") ?? undefined,
    toNodeId:
      url.searchParams.get("toNodeId") ?? undefined,
    type: parseRelationType(
      url.searchParams.get("type")
    ),
  };
}

export function serializeKnowledge<T>(
  value: T
): T {

  return JSON.parse(
    JSON.stringify(
      value,
      (_key, currentValue) => {

        if (typeof currentValue === "bigint") {
          return currentValue.toString();
        }

        if (
          currentValue !== null &&
          typeof currentValue === "object" &&
          currentValue.constructor?.name === "Decimal"
        ) {
          return currentValue.toString();
        }

        return currentValue;
      }
    )
  ) as T;
}