import type { MetadataRoute } from "next";

import {
  SEO_DOMAIN,
  SEO_SUPPORTED_LOCALES,
} from "@/lib/seo/seo.constants";

export default function sitemap():
  MetadataRoute.Sitemap {
  return SEO_SUPPORTED_LOCALES.map(
    (locale) => ({
      url:
        `${SEO_DOMAIN}/${locale}`,
      changeFrequency:
        "daily",
      priority:
        1,
    })
  );
}
