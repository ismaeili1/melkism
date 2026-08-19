/**
 * MELKISM Provenance Runtime
 *
 * v0.2.4
 *
 * In-memory implementation of the Provenance Pipeline Contract.
 * No database, persistence, API, or external source access.
 */

import type {
  CreateProvenanceInput,
  ProvenancePipelineContract,
} from "../../provenance/provenance.contract";

import type {
  ProvenanceChainContract,
} from "../../provenance/provenance.chain";

import type {
  ProvenanceId,
  ProvenanceRecord,
  ProvenanceStage,
} from "../../provenance/provenance.types";

class InMemoryProvenanceChain
  implements ProvenanceChainContract
{
  constructor(
    private readonly records: Map<
      ProvenanceId,
      ProvenanceRecord
    >,
  ) {}

  getRoot(record: ProvenanceRecord): ProvenanceRecord {
    let current = record;

    while (current.parentId) {
      const parent = this.records.get(current.parentId);

      if (!parent) {
        break;
      }

      current = parent;
    }

    return current;
  }

  getParent(
    record: ProvenanceRecord,
  ): ProvenanceRecord | undefined {
    if (!record.parentId) {
      return undefined;
    }

    return this.records.get(record.parentId);
  }

  getChain(
    record: ProvenanceRecord,
  ): readonly ProvenanceRecord[] {
    const chain: ProvenanceRecord[] = [];
    let current: ProvenanceRecord | undefined = record;

    while (current) {
      chain.push(current);

      if (!current.parentId) {
        break;
      }

      current = this.records.get(current.parentId);
    }

    return chain.reverse();
  }

  validateChain(
    records: readonly ProvenanceRecord[],
  ): boolean {
    if (records.length === 0) {
      return true;
    }

    const ids = new Set<ProvenanceId>();

    for (const record of records) {
      if (ids.has(record.id)) {
        return false;
      }

      ids.add(record.id);

      if (
        record.parentId &&
        !ids.has(record.parentId) &&
        !records.some(
          (candidate) => candidate.id === record.parentId,
        )
      ) {
        return false;
      }
    }

    return true;
  }
}

export class InMemoryProvenanceRuntime
  implements ProvenancePipelineContract
{
  private readonly records = new Map<
    ProvenanceId,
    ProvenanceRecord
  >();

  readonly chain: ProvenanceChainContract;

  constructor() {
    this.chain = new InMemoryProvenanceChain(this.records);
  }

  create(input: CreateProvenanceInput): ProvenanceRecord {
    const record: ProvenanceRecord = {
      id: this.createId(),
      sourceId: input.sourceId,
      sourceUrl: input.sourceUrl,
      sourceVersion: input.sourceVersion,
      stage: input.stage,
      observedAt:
        input.observedAt ?? new Date().toISOString(),
      fetchedAt: input.fetchedAt,
      normalizedAt: input.normalizedAt,
      contentHash: input.contentHash,
      adapterName: input.adapterName,
      adapterVersion: input.adapterVersion,
      normalizationVersion:
        input.normalizationVersion,
      locale: input.locale,
      parentId: input.parentId,
      metadata: input.metadata,
    };

    this.records.set(record.id, record);

    return record;
  }

  getById(
    id: ProvenanceId,
  ): ProvenanceRecord | undefined {
    return this.records.get(id);
  }

  getBySource(
    sourceId: string,
  ): readonly ProvenanceRecord[] {
    return [...this.records.values()].filter(
      (record) => record.sourceId === sourceId,
    );
  }

  getByStage(
    stage: ProvenanceStage,
  ): readonly ProvenanceRecord[] {
    return [...this.records.values()].filter(
      (record) => record.stage === stage,
    );
  }

  private createId(): ProvenanceId {
    return `prov_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2, 10)}`;
  }
}