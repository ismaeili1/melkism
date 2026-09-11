/**
 * MELKISM v6.33.0
 * Schema.org structured data.
 */

import {
  SEO_DOMAIN,
  SEO_SITE_NAME,
} from "./seo.constants";

import type {
  SeoStructuredDataOrganization,
  SeoStructuredDataWebsite,
} from "./seo.types";

export function buildOrganizationStructuredData():
  SeoStructuredDataOrganization {
  return {
    "@context":
      "https://schema.org",
    "@type":
      "Organization",
    name:
      SEO_SITE_NAME,
    url:
      SEO_DOMAIN,
  };
}

export function buildWebsiteStructuredData(
  locale: string
): SeoStructuredDataWebsite {
  return {
    "@context":
      "https://schema.org",
    "@type":
      "WebSite",
    name:
      SEO_SITE_NAME,
    url:
      SEO_DOMAIN,
    inLanguage:
      locale,
  };
}
