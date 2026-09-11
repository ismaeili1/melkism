import {
  isLocale,
  type Locale,
} from "./config";

export function normalizePath(
  pathname: string
): string {
  if (!pathname) {
    return "/";
  }

  return pathname.startsWith("/")
    ? pathname
    : `/${pathname}`;
}

export function stripLocalePrefix(
  pathname: string
): string {
  const normalized = normalizePath(pathname);
  const segments = normalized
    .split("/")
    .filter(Boolean);

  if (
    segments.length > 0 &&
    isLocale(segments[0])
  ) {
    const rest = segments.slice(1);

    return rest.length > 0
      ? `/${rest.join("/")}`
      : "/";
  }

  return normalized;
}

export function localizedPath(
  locale: Locale,
  pathname: string
): string {
  const cleanPath =
    stripLocalePrefix(pathname);

  return cleanPath === "/"
    ? `/${locale}`
    : `/${locale}${cleanPath}`;
}

export function switchLocalePath(
  pathname: string,
  targetLocale: Locale
): string {
  return localizedPath(
    targetLocale,
    pathname
  );
}
