import type { MetadataRoute } from "next";

import {
  SEO_DOMAIN,
  SEO_SITEMAP_PATH,
} from "@/lib/seo/seo.constants";

export default function robots():
  MetadataRoute.Robots {
  return {
    rules: {
      userAgent:
        "*",
      allow:
        "/",
    },
    sitemap:
      `${SEO_DOMAIN}${SEO_SITEMAP_PATH}`,
  };
}
