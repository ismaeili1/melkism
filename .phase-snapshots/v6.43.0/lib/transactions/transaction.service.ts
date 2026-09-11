import {
  InMemoryTransactionRepository,
  type TransactionRepository,
} from "./transaction.repository";

import type {
  TransactionPriority,
  TransactionPurpose,
  TransactionRecord,
  TransactionStatus,
} from "./transaction.types";

export type CreateTransactionInput =
  Omit<TransactionRecord, "createdAt" | "updatedAt">;

export class TransactionService {
  constructor(
    private readonly repository: TransactionRepository =
      new InMemoryTransactionRepository()
  ) {}

  async create(
    input: CreateTransactionInput
  ): Promise<TransactionRecord> {
    const now = new Date().toISOString();

    return this.repository.create({
      ...input,
      createdAt: now,
      updatedAt: now,
    });
  }

  async getById(
    id: string
  ): Promise<TransactionRecord | null> {
    return this.repository.getById(id);
  }

  async getByPropertyId(
    propertyId: string
  ): Promise<TransactionRecord[]> {
    return this.repository.getByPropertyId(propertyId);
  }

  async changeStatus(
    id: string,
    status: TransactionStatus
  ): Promise<TransactionRecord | null> {
    const transaction = await this.repository.getById(id);

    if (!transaction) {
      return null;
    }

    return this.repository.update({
      ...transaction,
      status,
      updatedAt: new Date().toISOString(),
    });
  }

  async changePriority(
    id: string,
    priority: TransactionPriority
  ): Promise<TransactionRecord | null> {
    const transaction = await this.repository.getById(id);

    if (!transaction) {
      return null;
    }

    return this.repository.update({
      ...transaction,
      priority,
      updatedAt: new Date().toISOString(),
    });
  }

  async list(
    limit = 100
  ): Promise<TransactionRecord[]> {
    return this.repository.list(limit);
  }

  isPurposeSupported(
    purpose: TransactionPurpose
  ): boolean {
    return [
      "sale",
      "rent",
      "lease",
      "purchase",
      "investment",
      "development",
      "auction",
      "exchange",
      "other",
    ].includes(purpose);
  }
}