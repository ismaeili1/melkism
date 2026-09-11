import {
  MAX_LOG_ATTRIBUTES,
} from "./observability.constants";

const SENSITIVE_KEYS = new Set([
  "password",
  "passwd",
  "secret",
  "token",
  "accessToken",
  "refreshToken",
  "authorization",
  "cookie",
  "set-cookie",
  "apiKey",
  "api_key",
  "session",
  "sessionToken",
  "csrf",
]);

function isSensitiveKey(
  key: string
): boolean {
  return SENSITIVE_KEYS.has(
    key
  );
}

function sanitizeValue(
  value: unknown,
  depth: number
): unknown {
  if (depth > 3) {
    return "[depth-limit]";
  }

  if (
    value === null ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return value;
  }

  if (value instanceof Error) {
    return {
      name: value.name,
      message: value.message,
    };
  }

  if (Array.isArray(value)) {
    return value
      .slice(0, MAX_LOG_ATTRIBUTES)
      .map(
        (item) =>
          sanitizeValue(
            item,
            depth + 1
          )
      );
  }

  if (
    typeof value === "object"
  ) {
    const input =
      value as Record<
        string,
        unknown
      >;

    const output:
      Record<string, unknown> =
      {};

    let count = 0;

    for (
      const [key, item]
      of Object.entries(input)
    ) {
      if (
        count >=
        MAX_LOG_ATTRIBUTES
      ) {
        break;
      }

      if (isSensitiveKey(key)) {
        output[key] =
          "[REDACTED]";
      }
      else {
        output[key] =
          sanitizeValue(
            item,
            depth + 1
          );
      }

      count += 1;
    }

    return output;
  }

  return String(value);
}

export function redactAttributes(
  attributes:
    | Record<string, unknown>
    | undefined
): Record<string, unknown> {
  if (!attributes) {
    return {};
  }

  return sanitizeValue(
    attributes,
    0
  ) as Record<
    string,
    unknown
  >;
}
