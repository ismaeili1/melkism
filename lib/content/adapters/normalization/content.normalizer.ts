import type { Source } from "../../sources/source.types";

export type NormalizationContext = {
  source: Source;
  normalizedAt: string;
  locale?: string;
};

export type NormalizedContent = {
  id: string;
  sourceId: string;
  title: string;
  summary?: string;
  body?: string;
  url?: string;
  publishedAt?: string;
  language?: string;
  tags: string[];
  metadata: Record<string, unknown>;
};

export interface ContentNormalizer<TInput = unknown> {
  readonly name: string;
  readonly version: string;

  normalize(
    input: TInput,
    context: NormalizationContext,
  ): Promise<NormalizedContent>;
}