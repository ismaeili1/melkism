/**
 * MELKISM v6.33.0
 * SEO types.
 */

export interface SeoPageInput {
  title?: string;
  description?: string;
  canonicalPath?: string;
  locale: string;
  imagePath?: string;
  noIndex?: boolean;
}

export interface SeoMetadataBundle {
  title: string;
  description: string;
  canonicalUrl?: string;
  locale: string;
  imageUrl?: string;
  noIndex: boolean;
}

export interface SeoStructuredDataOrganization {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
}

export interface SeoStructuredDataWebsite {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  inLanguage: string;
}
