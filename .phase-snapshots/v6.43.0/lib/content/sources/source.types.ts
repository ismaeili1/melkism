/**
 * MELKISM Source Domain Model
 *
 * v0.2.2.2
 */

import type {
  SourceAccessMethod,
  SourceAuthorityLevel,
  SourceType,
  SourceVerificationStatus,
} from "./source.constants";

export type SourceId = string;

export type SourceIdentity = {
  id: SourceId;
  name: string;
  slug: string;
  description?: string;
};

export type SourceGeography = {
  countryCode?: string;
  regionCode?: string;
  city?: string;
};

export type SourceLanguage = {
  primary: string;
  supported?: string[];
};

export type SourceAccess = {
  method: SourceAccessMethod;
  endpoint?: string;
  feedUrl?: string;
  apiBaseUrl?: string;
  websiteUrl?: string;
};

export type SourceVerification = {
  status: SourceVerificationStatus;
  verifiedAt?: string;
  verifiedBy?: string;
  verificationNotes?: string;
};

export type Source = {
  identity: SourceIdentity;

  type: SourceType;

  authorityLevel: SourceAuthorityLevel;

  geography?: SourceGeography;

  language: SourceLanguage;

  access: SourceAccess[];

  verification: SourceVerification;

  active: boolean;

  createdAt: string;
  updatedAt: string;
};