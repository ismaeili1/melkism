import type {
  TransactionRecord,
  TransactionStatus,
} from "./transaction.types";

const allowedTransitions: Record<
  TransactionStatus,
  readonly TransactionStatus[]
> = {
  draft: ["initiated", "cancelled"],
  initiated: ["offer", "negotiation", "cancelled"],
  offer: ["negotiation", "agreed", "cancelled", "expired"],
  negotiation: ["agreed", "offer", "cancelled", "expired"],
  agreed: ["contracted", "cancelled"],
  contracted: ["payment_pending", "closing", "cancelled"],
  payment_pending: ["closing", "disputed", "cancelled"],
  closing: ["completed", "disputed", "cancelled"],
  completed: [],
  cancelled: [],
  expired: [],
  disputed: ["on_hold", "closing", "cancelled"],
  on_hold: ["negotiation", "closing", "cancelled"],
};

export class TransactionWorkflowService {
  canTransition(
    from: TransactionStatus,
    to: TransactionStatus
  ): boolean {
    return allowedTransitions[from].includes(to);
  }

  transition(
    transaction: TransactionRecord,
    nextStatus: TransactionStatus
  ): TransactionRecord {
    if (!this.canTransition(transaction.status, nextStatus)) {
      throw new Error(
        `Invalid transaction transition: ${transaction.status} -> ${nextStatus}`
      );
    }

    return {
      ...transaction,
      status: nextStatus,
      updatedAt: new Date().toISOString(),
    };
  }
}