import type { Source } from "../../sources/source.types";

export type SourceAdapterContext = {
  source: Source;
  requestedAt: string;
  locale?: string;
  signal?: AbortSignal;
};

export type SourceAdapterResult<TPayload = unknown> = {
  sourceId: string;
  fetchedAt: string;
  payload: TPayload;
  contentType?: string;
  rawUrl?: string;
};

export interface SourceAdapter<TPayload = unknown> {
  readonly name: string;
  readonly version: string;

  supports(source: Source): boolean;

  fetch(
    context: SourceAdapterContext,
  ): Promise<SourceAdapterResult<TPayload>>;
}