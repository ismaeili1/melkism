import type { OfferRecord } from "./offer.types";

export interface OfferRepository {
  getById(id: string): Promise<OfferRecord | null>;
  getByTransactionId(transactionId: string): Promise<OfferRecord[]>;
  create(offer: OfferRecord): Promise<OfferRecord>;
  update(offer: OfferRecord): Promise<OfferRecord>;
}

export class InMemoryOfferRepository
  implements OfferRepository
{
  private readonly items = new Map<string, OfferRecord>();

  async getById(id: string): Promise<OfferRecord | null> {
    return this.items.get(id) ?? null;
  }

  async getByTransactionId(
    transactionId: string
  ): Promise<OfferRecord[]> {
    return Array.from(this.items.values()).filter(
      (offer) => offer.transactionId === transactionId
    );
  }

  async create(offer: OfferRecord): Promise<OfferRecord> {
    this.items.set(offer.id, offer);
    return offer;
  }

  async update(offer: OfferRecord): Promise<OfferRecord> {
    this.items.set(offer.id, offer);
    return offer;
  }
}