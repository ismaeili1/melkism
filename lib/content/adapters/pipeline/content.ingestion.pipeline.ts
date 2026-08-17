import type { Source } from "../../sources/source.types";
import type { SourceAdapterContext, SourceAdapterResult } from "../contracts/source.adapter";
import type { NormalizedContent, ContentNormalizer } from "../normalization/content.normalizer";
import type { ProvenanceRecord } from "../../provenance/provenance.types";
import type { ProvenancePipelineContract } from "../../provenance/provenance.contract";

export type IngestionStage =
  | "source-resolution"
  | "fetch"
  | "normalization"
  | "provenance"
  | "validation"
  | "completed"
  | "failed";

export type IngestionContext = {
  source: Source;
  requestedAt: string;
  locale?: string;
  signal?: AbortSignal;
};

export type IngestionResult = {
  provenance?: ProvenanceRecord;
  sourceId: string;
  stage: IngestionStage;
  fetchedAt?: string;
  normalizedAt?: string;
  content?: NormalizedContent;
  provenanceId?: string;
  errors: string[];
};

export type IngestionPipelineDependencies<TPayload = unknown> = {
  adapter: {
    fetch(
      context: SourceAdapterContext,
    ): Promise<SourceAdapterResult<TPayload>>;
  };
  normalizer: ContentNormalizer<TPayload>;
  provenance: ProvenancePipelineContract;
};

export interface ContentIngestionPipeline<TPayload = unknown> {
  readonly name: string;
  readonly version: string;

  ingest(
    context: IngestionContext,
    dependencies: IngestionPipelineDependencies<TPayload>,
  ): Promise<IngestionResult>;
}