/**
 * MELKISM Ingestion Persistence Runtime Integration
 *
 * v0.2.5
 *
 * Runtime integration boundary between the ingestion
 * pipeline and persistence bridge.
 *
 * This component does not perform ingestion.
 * It does not fetch sources.
 * It does not normalize content.
 * It does not create provenance.
 *
 * It only delegates completed ingestion results
 * to the persistence bridge.
 *
 * No Prisma, database, HTTP, filesystem, or
 * external persistence technology is used.
 */

import {
  IngestionPersistenceBridge,
  type IngestionPersistenceBridgeResult,
  type PersistableIngestionResult,
} from "./ingestion.persistence.bridge";

export class IngestionPersistenceRuntime {
  constructor(
    private readonly bridge: IngestionPersistenceBridge,
  ) {}

  persist(
    result: PersistableIngestionResult,
  ): IngestionPersistenceBridgeResult {
    return this.bridge.persist(result);
  }
}
