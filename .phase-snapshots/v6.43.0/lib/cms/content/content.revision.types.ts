import {
  requirePositiveInteger,
  requireString,
} from "@/lib/api/core/validation";

export type ContentRevisionListInput = {
  page: number;
  pageSize: number;
};

export type ContentRevisionListResult<T> = {
  items: readonly T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
};

function parsePositiveQueryInteger(
  value: string | null,
  field: string,
  fallback: number,
  maximum: number
): number {
  if (
    value === null ||
    value.trim().length === 0
  ) {
    return fallback;
  }

  const parsed =
    requirePositiveInteger(
      value,
      field
    );

  if (parsed > maximum) {
    throw new Error(
      "VALIDATION_ERROR"
    );
  }

  return parsed;
}

export function parseRevisionListInput(
  searchParams: URLSearchParams
): ContentRevisionListInput {
  return {
    page:
      parsePositiveQueryInteger(
        searchParams.get("page"),
        "page",
        1,
        10_000
      ),
    pageSize:
      parsePositiveQueryInteger(
        searchParams.get("pageSize"),
        "pageSize",
        20,
        100
      ),
  };
}

export function parseRevisionId(
  value: unknown
): string {
  const id =
    requireString(
      value,
      "revisionId"
    );

  if (id.length > 128) {
    throw new Error(
      "VALIDATION_ERROR"
    );
  }

  return id;
}