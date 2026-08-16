/**
 * MELKISM Source Validators
 *
 * v0.2.2.2
 */

import {
  SOURCE_ACCESS_METHODS,
  SOURCE_AUTHORITY_LEVELS,
  SOURCE_TYPES,
  SOURCE_VERIFICATION_STATUSES,
} from "./source.constants";

import type {
  SourceAccessMethod,
  SourceAuthorityLevel,
  SourceType,
  SourceVerificationStatus,
} from "./source.constants";

export function isSourceType(
  value: string,
): value is SourceType {
  return (SOURCE_TYPES as readonly string[]).includes(value);
}

export function isSourceAuthorityLevel(
  value: string,
): value is SourceAuthorityLevel {
  return (
    SOURCE_AUTHORITY_LEVELS as readonly string[]
  ).includes(value);
}

export function isSourceVerificationStatus(
  value: string,
): value is SourceVerificationStatus {
  return (
    SOURCE_VERIFICATION_STATUSES as readonly string[]
  ).includes(value);
}

export function isSourceAccessMethod(
  value: string,
): value is SourceAccessMethod {
  return (
    SOURCE_ACCESS_METHODS as readonly string[]
  ).includes(value);
}

export function isValidSourceUrl(
  value: string,
): boolean {
  try {
    const url = new URL(value);

    return (
      url.protocol === "https:" ||
      url.protocol === "http:"
    );
  } catch {
    return false;
  }
}