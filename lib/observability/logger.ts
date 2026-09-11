import {
  DEFAULT_LOG_LEVEL,
  LOG_LEVELS,
  MAX_LOG_MESSAGE_LENGTH,
  SERVICE_ENVIRONMENT,
  SERVICE_NAME,
} from "./observability.constants";

import {
  redactAttributes,
} from "./redaction";

import type {
  LogAttributes,
  LogLevel,
  LogEntry,
} from "./observability.types";

const numericLevels:
  Record<LogLevel, number> = {
    debug: 10,
    info: 20,
    warn: 30,
    error: 40,
  };

function resolveLevel(
  value: string | undefined
): LogLevel {
  if (
    value &&
    (
      LOG_LEVELS as readonly string[]
    ).includes(value)
  ) {
    return value as LogLevel;
  }

  return DEFAULT_LOG_LEVEL;
}

function shouldLog(
  level: LogLevel
): boolean {
  const threshold =
    resolveLevel(
      process.env.MELKISM_LOG_LEVEL
    );

  return (
    numericLevels[level] >=
    numericLevels[threshold]
  );
}

function normalizeMessage(
  message: string
): string {
  const value =
    String(message);

  if (
    value.length <=
    MAX_LOG_MESSAGE_LENGTH
  ) {
    return value;
  }

  return value.slice(
    0,
    MAX_LOG_MESSAGE_LENGTH
  );
}

function emit(
  level: LogLevel,
  message: string,
  attributes?: LogAttributes,
  requestId?: string
): void {
  if (!shouldLog(level)) {
    return;
  }

  const entry: LogEntry = {
    timestamp:
      new Date().toISOString(),
    level,
    service:
      SERVICE_NAME,
    environment:
      SERVICE_ENVIRONMENT,
    message:
      normalizeMessage(message),
    requestId,
    attributes:
      redactAttributes(
        attributes
      ),
  };

  const serialized =
    JSON.stringify(entry);

  switch (level) {
    case "error":
      console.error(serialized);
      break;

    case "warn":
      console.warn(serialized);
      break;

    default:
      console.log(serialized);
      break;
  }
}

export function log(
  level: LogLevel,
  message: string,
  attributes?: LogAttributes,
  requestId?: string
): void {
  emit(
    level,
    message,
    attributes,
    requestId
  );
}

export const logger = {
  debug(
    message: string,
    attributes?: LogAttributes,
    requestId?: string
  ): void {
    emit(
      "debug",
      message,
      attributes,
      requestId
    );
  },

  info(
    message: string,
    attributes?: LogAttributes,
    requestId?: string
  ): void {
    emit(
      "info",
      message,
      attributes,
      requestId
    );
  },

  warn(
    message: string,
    attributes?: LogAttributes,
    requestId?: string
  ): void {
    emit(
      "warn",
      message,
      attributes,
      requestId
    );
  },

  error(
    message: string,
    attributes?: LogAttributes,
    requestId?: string
  ): void {
    emit(
      "error",
      message,
      attributes,
      requestId
    );
  },
};
