/**
 * MELKISM Database Persistence Adapter Contract
 *
 * v0.2.6
 *
 * Technology-neutral database boundary.
 */

import type {
  ContentRepository,
  IngestionRepository,
  ProvenanceRepository,
} from "../repositories";

export type DatabasePersistenceConnectionState =
  | "disconnected"
  | "connected"
  | "failed";

export type DatabasePersistenceHealth = {
  state: DatabasePersistenceConnectionState;
  latencyMs?: number;
  message?: string;
};

export interface DatabasePersistenceAdapter {
  readonly name: string;
  readonly version: string;

  connect(): Promise<void>;

  disconnect(): Promise<void>;

  health(): Promise<DatabasePersistenceHealth>;

  readonly content: ContentRepository;
  readonly ingestion: IngestionRepository;
  readonly provenance: ProvenanceRepository;
}