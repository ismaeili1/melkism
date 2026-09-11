import {
  MediaKind,
} from "@/prisma/generated/prisma/client";

import {
  requirePositiveInteger,
  requireString,
} from "@/lib/api/core/validation";

export type JsonRecord =
  Record<string, unknown>;

export type MediaCreateInput = {
  kind: MediaKind;
  storageKey: string;
  url?: string | null;
  mimeType?: string | null;
  sizeBytes?: bigint | null;
  width?: number | null;
  height?: number | null;
  metadata?: JsonRecord;
};

export type MediaUpdateInput = {
  kind?: MediaKind;
  storageKey?: string;
  url?: string | null;
  mimeType?: string | null;
  sizeBytes?: bigint | null;
  width?: number | null;
  height?: number | null;
  metadata?: JsonRecord;
};

export type MediaListInput = {
  page: number;
  pageSize: number;
  kind?: MediaKind;
};

export function parseMediaKind(
  value: string | null
): MediaKind | undefined {
  if (!value) {
    return undefined;
  }

  if (
    value !== "IMAGE" &&
    value !== "VIDEO" &&
    value !== "AUDIO" &&
    value !== "DOCUMENT" &&
    value !== "OTHER"
  ) {
    throw new Error(
      "INVALID_MEDIA_KIND"
    );
  }

  return value as MediaKind;
}

function parseSizeBytes(
  value: unknown
): bigint | null | undefined {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  const raw =
    requireString(
      String(value),
      "sizeBytes"
    );

  if (!/^\d+$/.test(raw)) {
    throw new Error(
      "INVALID_SIZE_BYTES"
    );
  }

  return BigInt(raw);
}

function parseDimension(
  value: unknown,
  field: string
): number | null | undefined {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return requirePositiveInteger(
    String(value),
    field
  );
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
    throw new Error(
      "INVALID_METADATA"
    );
  }

  return value as JsonRecord;
}

export function parseMediaCreateInput(
  body: Record<string, unknown>
): MediaCreateInput {
  const kind =
    parseMediaKind(
      requireString(
        body.kind,
        "kind"
      )
    );

  if (!kind) {
    throw new Error(
      "INVALID_MEDIA_KIND"
    );
  }

  const storageKey =
    requireString(
      body.storageKey,
      "storageKey"
    );

  return {
    kind,
    storageKey,
    url:
      body.url === undefined
        ? undefined
        : body.url === null
          ? null
          : String(body.url),
    mimeType:
      body.mimeType === undefined
        ? undefined
        : body.mimeType === null
          ? null
          : String(body.mimeType),
    sizeBytes:
      parseSizeBytes(
        body.sizeBytes
      ),
    width:
      parseDimension(
        body.width,
        "width"
      ),
    height:
      parseDimension(
        body.height,
        "height"
      ),
    metadata:
      parseMetadata(
        body.metadata
      ),
  };
}

export function parseMediaUpdateInput(
  body: Record<string, unknown>
): MediaUpdateInput {
  const result:
    MediaUpdateInput = {};

  if (body.kind !== undefined) {
    result.kind =
      parseMediaKind(
        requireString(
          body.kind,
          "kind"
        )
      );
  }

  if (body.storageKey !== undefined) {
    result.storageKey =
      requireString(
        body.storageKey,
        "storageKey"
      );
  }

  if (body.url !== undefined) {
    result.url =
      body.url === null
        ? null
        : String(body.url);
  }

  if (body.mimeType !== undefined) {
    result.mimeType =
      body.mimeType === null
        ? null
        : String(body.mimeType);
  }

  if (body.sizeBytes !== undefined) {
    result.sizeBytes =
      parseSizeBytes(
        body.sizeBytes
      );
  }

  if (body.width !== undefined) {
    result.width =
      parseDimension(
        body.width,
        "width"
      );
  }

  if (body.height !== undefined) {
    result.height =
      parseDimension(
        body.height,
        "height"
      );
  }

  if (body.metadata !== undefined) {
    result.metadata =
      parseMetadata(
        body.metadata
      );
  }

  return result;
}

export function parseMediaListInput(
  url: URL
): MediaListInput {
  const pageRaw =
    url.searchParams.get("page");

  const pageSizeRaw =
    url.searchParams.get("pageSize");

  const page =
    pageRaw === null
      ? 1
      : requirePositiveInteger(
          pageRaw,
          "page"
        );

  const pageSize =
    pageSizeRaw === null
      ? 20
      : requirePositiveInteger(
          pageSizeRaw,
          "pageSize"
        );

  if (pageSize > 100) {
    throw new Error(
      "INVALID_PAGE_SIZE"
    );
  }

  return {
    page,
    pageSize,
    kind:
      parseMediaKind(
        url.searchParams.get("kind")
      ),
  };
}

export function serializeMedia<T>(
  value: T
): T {
  return JSON.parse(
    JSON.stringify(
      value,
      (_key, current) =>
        typeof current === "bigint"
          ? current.toString()
          : current
    )
  ) as T;
}
