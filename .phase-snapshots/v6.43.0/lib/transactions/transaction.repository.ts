import type { TransactionRecord } from "./transaction.types";

export interface TransactionRepository {
  getById(id: string): Promise<TransactionRecord | null>;
  getByPropertyId(propertyId: string): Promise<TransactionRecord[]>;
  create(transaction: TransactionRecord): Promise<TransactionRecord>;
  update(transaction: TransactionRecord): Promise<TransactionRecord>;
  list(limit?: number): Promise<TransactionRecord[]>;
}

export class InMemoryTransactionRepository
  implements TransactionRepository
{
  private readonly items = new Map<string, TransactionRecord>();

  async getById(id: string): Promise<TransactionRecord | null> {
    return this.items.get(id) ?? null;
  }

  async getByPropertyId(
    propertyId: string
  ): Promise<TransactionRecord[]> {
    return Array.from(this.items.values()).filter(
      (transaction) => transaction.propertyId === propertyId
    );
  }

  async create(
    transaction: TransactionRecord
  ): Promise<TransactionRecord> {
    this.items.set(transaction.id, transaction);
    return transaction;
  }

  async update(
    transaction: TransactionRecord
  ): Promise<TransactionRecord> {
    this.items.set(transaction.id, transaction);
    return transaction;
  }

  async list(limit = 100): Promise<TransactionRecord[]> {
    return Array.from(this.items.values()).slice(0, limit);
  }
}