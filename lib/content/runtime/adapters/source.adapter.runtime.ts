/**
 * MELKISM Source Adapter Runtime
 *
 * v0.2.4
 *
 * Runtime implementation for executing source adapters.
 * In-memory only. No HTTP, database, crawler, or persistence.
 */

import type {
  SourceAdapter,
  SourceAdapterContext,
  SourceAdapterResult,
} from "../../adapters/contracts/source.adapter";

export type SourceAdapterRuntimeResult<TPayload = unknown> = {
  adapterName: string;
  adapterVersion: string;
  result: SourceAdapterResult<TPayload>;
};

export class SourceAdapterRuntime {
  async execute<TPayload = unknown>(
    adapter: SourceAdapter<TPayload>,
    context: SourceAdapterContext,
  ): Promise<SourceAdapterRuntimeResult<TPayload>> {
    const result = await adapter.fetch(context);

    return {
      adapterName: adapter.name,
      adapterVersion: adapter.version,
      result,
    };
  }
}