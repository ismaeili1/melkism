/**
 * MELKISM v6.33.0
 * SEO metadata helpers.
 */

import {
  SEO_DEFAULT_DESCRIPTION,
  SEO_DEFAULT_LOCALE,
  SEO_DEFAULT_TITLE,
  SEO_DOMAIN,
  SEO_SOCIAL_IMAGE_PATH,
  SEO_TITLE_TEMPLATE,
} from "./seo.constants";

import type {
  SeoMetadataBundle,
  SeoPageInput,
} from "./seo.types";

function normalizePath(
  value: string
): string {
  if (!value) {
    return "";
  }

  return value.startsWith("/")
    ? value
    : `/${value}`;
}

export function buildSeoMetadata(
  input: SeoPageInput
): SeoMetadataBundle {
  const title =
    input.title?.trim() ||
    SEO_DEFAULT_TITLE;

  const description =
    input.description?.trim() ||
    SEO_DEFAULT_DESCRIPTION;

  const locale =
    input.locale ||
    SEO_DEFAULT_LOCALE;

  const canonicalPath =
    input.canonicalPath
      ? normalizePath(
          input.canonicalPath
        )
      : undefined;

  const canonicalUrl =
    canonicalPath
      ? `${SEO_DOMAIN}${canonicalPath}`
      : undefined;

  const imagePath =
    input.imagePath ||
    SEO_SOCIAL_IMAGE_PATH;

  const imageUrl =
    `${SEO_DOMAIN}${normalizePath(
      imagePath
    )}`;

  return {
    title:
      input.title
        ? SEO_TITLE_TEMPLATE.replace(
            "%s",
            title
          )
        : SEO_DEFAULT_TITLE,

    description,

    canonicalUrl,

    locale,

    imageUrl,

    noIndex:
      input.noIndex === true,
  };
}
