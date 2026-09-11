import {
  InMemoryOfferRepository,
  type OfferRepository,
} from "./offer.repository";

import type {
  OfferRecord,
  OfferStatus,
} from "./offer.types";

export type CreateOfferInput =
  Omit<OfferRecord, "createdAt" | "updatedAt">;

export class OfferService {
  constructor(
    private readonly repository: OfferRepository =
      new InMemoryOfferRepository()
  ) {}

  async create(
    input: CreateOfferInput
  ): Promise<OfferRecord> {
    const now = new Date().toISOString();

    return this.repository.create({
      ...input,
      createdAt: now,
      updatedAt: now,
    });
  }

  async getById(
    id: string
  ): Promise<OfferRecord | null> {
    return this.repository.getById(id);
  }

  async getByTransactionId(
    transactionId: string
  ): Promise<OfferRecord[]> {
    return this.repository.getByTransactionId(transactionId);
  }

  async changeStatus(
    id: string,
    status: OfferStatus
  ): Promise<OfferRecord | null> {
    const offer = await this.repository.getById(id);

    if (!offer) {
      return null;
    }

    return this.repository.update({
      ...offer,
      status,
      updatedAt: new Date().toISOString(),
    });
  }
}