import {
  ContentKind,
} from "@/prisma/generated/prisma/client";

import {
  requireString,
} from "@/lib/api/core/validation";

export type ContentCreateInput = {
  slug: string;
  title: string;
  summary?: string;
  body?: string;
  kind: ContentKind;
  localeId: string;
};

export type ContentUpdateInput = {
  slug?: string;
  title?: string;
  summary?: string;
  body?: string;
  kind?: ContentKind;
  localeId?: string;
};

export type ContentListInput = {
  page: number;
  pageSize: number;
  search?: string;
  kind?: ContentKind;
  localeId?: string;
  includeDrafts: boolean;
};

export type ContentListResult<T> = {
  items: readonly T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
};

function readObject(
  value: unknown
): Record<string, unknown> {
  if (
    typeof value !== "object" ||
    value === null ||
    Array.isArray(value)
  ) {
    throw new Error("VALIDATION_ERROR");
  }

  return value as Record<string, unknown>;
}

function optionalString(
  value: unknown,
  field: string
): string | undefined {
  if (
    value === undefined ||
    value === null
  ) {
    return undefined;
  }

  return requireString(
    value,
    field
  );
}

function parseContentKind(
  value: unknown
): ContentKind {
  if (
    typeof value !== "string" ||
    !Object.values(ContentKind).includes(
      value as ContentKind
    )
  ) {
    throw new Error("VALIDATION_ERROR");
  }

  return value as ContentKind;
}

export function parseContentCreateInput(
  value: unknown
): ContentCreateInput {
  const data =
    readObject(value);

  return {
    slug:
      requireString(
        data.slug,
        "slug"
      ),
    title:
      requireString(
        data.title,
        "title"
      ),
    summary:
      optionalString(
        data.summary,
        "summary"
      ),
    body:
      optionalString(
        data.body,
        "body"
      ),
    kind:
      parseContentKind(
        data.kind
      ),
    localeId:
      requireString(
        data.localeId,
        "localeId"
      ),
  };
}

export function parseContentUpdateInput(
  value: unknown
): ContentUpdateInput {
  const data =
    readObject(value);

  const result: ContentUpdateInput = {};

  if (data.slug !== undefined) {
    result.slug =
      requireString(
        data.slug,
        "slug"
      );
  }

  if (data.title !== undefined) {
    result.title =
      requireString(
        data.title,
        "title"
      );
  }

  if (data.summary !== undefined) {
    result.summary =
      requireString(
        data.summary,
        "summary"
      );
  }

  if (data.body !== undefined) {
    result.body =
      requireString(
        data.body,
        "body"
      );
  }

  if (data.kind !== undefined) {
    result.kind =
      parseContentKind(
        data.kind
      );
  }

  if (data.localeId !== undefined) {
    result.localeId =
      requireString(
        data.localeId,
        "localeId"
      );
  }

  if (
    Object.keys(result).length === 0
  ) {
    throw new Error("VALIDATION_ERROR");
  }

  return result;
}

export function parsePage(
  value: string | null
): number {
  if (value === null) {
    return 1;
  }

  const page =
    Number(value);

  if (
    !Number.isInteger(page) ||
    page < 1
  ) {
    throw new Error(
      "VALIDATION_ERROR"
    );
  }

  return page;
}

export function parsePageSize(
  value: string | null
): number {
  if (value === null) {
    return 20;
  }

  const pageSize =
    Number(value);

  if (
    !Number.isInteger(pageSize) ||
    pageSize < 1 ||
    pageSize > 100
  ) {
    throw new Error(
      "VALIDATION_ERROR"
    );
  }

  return pageSize;
}
