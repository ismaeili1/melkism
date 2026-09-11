/**
 * MELKISM v6.34.0
 * Accessibility rule helpers.
 */

import {
  ACCESSIBILITY_LTR_LOCALES,
  ACCESSIBILITY_RTL_LOCALES,
} from "./accessibility.constants";

import type {
  AccessibilityDirection,
  AccessibilityLocaleContract,
} from "./accessibility.types";

export function getAccessibilityDirection(
  locale: string
): AccessibilityDirection {
  if (
    ACCESSIBILITY_RTL_LOCALES.includes(
      locale as typeof ACCESSIBILITY_RTL_LOCALES[number]
    )
  ) {
    return "rtl";
  }

  if (
    ACCESSIBILITY_LTR_LOCALES.includes(
      locale as typeof ACCESSIBILITY_LTR_LOCALES[number]
    )
  ) {
    return "ltr";
  }

  return "ltr";
}

export function buildLocaleAccessibilityContract(
  locale: string
): AccessibilityLocaleContract {
  return {
    locale,
    direction:
      getAccessibilityDirection(
        locale
      ),
    languageTag:
      locale,
  };
}

export function isInteractiveElementAccessible(
  hasAccessibleName: boolean,
  isKeyboardReachable: boolean
): boolean {
  return (
    hasAccessibleName &&
    isKeyboardReachable
  );
}
