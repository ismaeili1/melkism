/**
 * MELKISM Content Ingestion Pipeline Runtime
 *
 * v0.2.4
 *
 * Runtime orchestration for:
 * Source Resolution -> Fetch -> Normalization -> Provenance
 *
 * In-memory orchestration only.
 * No persistence, database, HTTP client, crawler, or external API.
 */

import type {
  ContentIngestionPipeline,
  IngestionContext,
  IngestionPipelineDependencies,
  IngestionResult,
} from "../../adapters/pipeline/content.ingestion.pipeline";

export class ContentIngestionPipelineRuntime<TPayload = unknown>
  implements ContentIngestionPipeline<TPayload>
{
  readonly name = "melkism-content-ingestion-runtime";
  readonly version = "0.2.4";

  async ingest(
    context: IngestionContext,
    dependencies: IngestionPipelineDependencies<TPayload>,
  ): Promise<IngestionResult> {
    const sourceId = context.source.identity.id;

    // ----------------------------------------------------------
    // SOURCE RESOLUTION
    // ----------------------------------------------------------

    if (!context.source.active) {
      return {
        sourceId,
        stage: "failed",
        errors: [
          `Source is inactive: ${sourceId}`,
        ],
      };
    }

    if (!dependencies.adapter.supports(context.source)) {
      return {
        sourceId,
        stage: "failed",
        errors: [
          `Adapter "${dependencies.adapter.name}" does not support source "${sourceId}".`,
        ],
      };
    }

    try {
      // --------------------------------------------------------
      // FETCH
      // --------------------------------------------------------

      let fetched;

      try {
        fetched = await dependencies.adapter.fetch({
          source: context.source,
          requestedAt: context.requestedAt,
          locale: context.locale,
          signal: context.signal,
        });
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : String(error);

        return {
          sourceId,
          stage: "failed",
          errors: [
            `Adapter fetch failed: ${message}`,
          ],
        };
      }

      // --------------------------------------------------------
      // NORMALIZATION
      // --------------------------------------------------------

      const normalizedAt = new Date().toISOString();

      let normalized;

      try {
        normalized = await dependencies.normalizer.normalize(
          fetched.payload,
          {
            source: context.source,
            normalizedAt,
            locale: context.locale,
          },
        );
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : String(error);

        return {
          sourceId,
          stage: "failed",
          fetchedAt: fetched.fetchedAt,
          errors: [
            `Normalization failed: ${message}`,
          ],
        };
      }

      // --------------------------------------------------------
      // PROVENANCE
      // --------------------------------------------------------

      let provenance;

      try {
        provenance = dependencies.provenance.create({
          sourceId,
          sourceUrl: fetched.rawUrl,
          stage: "ingestion",
          fetchedAt: fetched.fetchedAt,
          normalizedAt,
          locale: context.locale,
        });
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : String(error);

        return {
          sourceId,
          stage: "failed",
          fetchedAt: fetched.fetchedAt,
          normalizedAt,
          content: normalized,
          errors: [
            `Provenance failed: ${message}`,
          ],
        };
      }

      // --------------------------------------------------------
      // VALIDATION
      // --------------------------------------------------------

      if (normalized.sourceId !== sourceId) {
        return {
          sourceId,
          stage: "failed",
          errors: [
            `Normalized content source mismatch: expected "${sourceId}", received "${normalized.sourceId}".`,
          ],
        };
      }

      if (provenance.sourceId !== sourceId) {
        return {
          sourceId,
          stage: "failed",
          errors: [
            `Provenance source mismatch: expected "${sourceId}", received "${provenance.sourceId}".`,
          ],
        };
      }

      return {
        sourceId,
        stage: "completed",
        fetchedAt: fetched.fetchedAt,
        normalizedAt,
        content: normalized,
        provenance,
        provenanceId: provenance.id,
        errors: [],
      };
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : String(error);

      return {
        sourceId,
        stage: "failed",
        errors: [message],
      };
    }
  }
}