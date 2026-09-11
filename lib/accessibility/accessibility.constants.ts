/**
 * MELKISM v6.34.0
 * Accessibility and international UX constants.
 */

export const ACCESSIBILITY_SUPPORTED_LOCALES = [
  "fa",
  "en",
  "ar",
  "tr",
] as const;

export const ACCESSIBILITY_RTL_LOCALES = [
  "fa",
  "ar",
] as const;

export const ACCESSIBILITY_LTR_LOCALES = [
  "en",
  "tr",
] as const;

export const ACCESSIBILITY_DEFAULT_LOCALE =
  "fa";

export const ACCESSIBILITY_REQUIRED_LANGUAGE_ATTR =
  "lang";

export const ACCESSIBILITY_REQUIRED_DIRECTION_ATTR =
  "dir";

export const ACCESSIBILITY_REQUIRED_MAIN_ELEMENT =
  "main";

export const ACCESSIBILITY_REQUIRED_NAVIGATION =
  "navigation";

export const ACCESSIBILITY_MIN_TOUCH_TARGET_PX =
  44;

export const ACCESSIBILITY_REQUIRED_FOCUS_VISIBILITY =
  true;

export const ACCESSIBILITY_REQUIRE_ALT_FOR_CONTENT_IMAGES =
  true;

export const ACCESSIBILITY_FORBID_RAW_BROWSER_STORAGE =
  true;
