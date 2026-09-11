/**
 * MELKISM Content Normalization Runtime
 *
 * v0.2.4
 *
 * Runtime implementation for executing content normalizers.
 * In-memory only. No persistence or external source access.
 */

import type {
  ContentNormalizer,
  NormalizationContext,
  NormalizedContent,
} from "../../adapters/normalization/content.normalizer";

export type ContentNormalizationRuntimeResult = {
  normalizerName: string;
  normalizerVersion: string;
  content: NormalizedContent;
};

export class ContentNormalizationRuntime {
  async execute<TInput = unknown>(
    normalizer: ContentNormalizer<TInput>,
    input: TInput,
    context: NormalizationContext,
  ): Promise<ContentNormalizationRuntimeResult> {
    const content = await normalizer.normalize(input, context);

    return {
      normalizerName: normalizer.name,
      normalizerVersion: normalizer.version,
      content,
    };
  }
}