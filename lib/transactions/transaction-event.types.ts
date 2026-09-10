export type TransactionEventType =
  | "transaction_created"
  | "status_changed"
  | "party_added"
  | "offer_submitted"
  | "offer_countered"
  | "offer_accepted"
  | "offer_rejected"
  | "negotiation_started"
  | "negotiation_updated"
  | "agreement_created"
  | "agreement_accepted"
  | "agreement_signed"
  | "payment_created"
  | "payment_completed"
  | "milestone_completed"
  | "transaction_completed"
  | "transaction_cancelled";

export interface TransactionEvent {
  id: string;
  transactionId: string;
  type: TransactionEventType;
  actorId?: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}