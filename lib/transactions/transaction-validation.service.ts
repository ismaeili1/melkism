import type { TransactionRecord } from "./transaction.types";

export interface TransactionValidationIssue {
  field: string;
  message: string;
}

export interface TransactionValidationResult {
  valid: boolean;
  issues: TransactionValidationIssue[];
}

export class TransactionValidationService {
  validate(
    transaction: TransactionRecord
  ): TransactionValidationResult {
    const issues: TransactionValidationIssue[] = [];

    if (!transaction.id.trim()) {
      issues.push({
        field: "id",
        message: "Transaction id is required.",
      });
    }

    if (!transaction.propertyId.trim()) {
      issues.push({
        field: "propertyId",
        message: "Property id is required.",
      });
    }

    if (!transaction.currency.trim()) {
      issues.push({
        field: "currency",
        message: "Currency is required.",
      });
    }

    if (
      transaction.amount !== undefined &&
      (!Number.isFinite(transaction.amount) ||
        transaction.amount < 0)
    ) {
      issues.push({
        field: "amount",
        message: "Transaction amount must be a non-negative finite number.",
      });
    }

    return {
      valid: issues.length === 0,
      issues,
    };
  }
}