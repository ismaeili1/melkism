/**
 * MELKISM v6.34.0
 * Accessibility contracts.
 */

export type AccessibilityDirection =
  | "rtl"
  | "ltr";

export interface AccessibilityLocaleContract {
  locale: string;
  direction: AccessibilityDirection;
  languageTag: string;
}

export interface AccessibilityCheck {
  name: string;
  passed: boolean;
  message: string;
}

export interface AccessibilityAuditReport {
  passed: boolean;
  checks: AccessibilityCheck[];
}
