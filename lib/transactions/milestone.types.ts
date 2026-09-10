export type TransactionMilestoneType =
  | "offer"
  | "negotiation"
  | "verification"
  | "agreement"
  | "signature"
  | "payment"
  | "inspection"
  | "approval"
  | "closing"
  | "handover"
  | "completion"
  | "custom";

export type TransactionMilestoneStatus =
  | "pending"
  | "in_progress"
  | "completed"
  | "blocked"
  | "cancelled";

export interface TransactionMilestone {
  id: string;
  transactionId: string;
  type: TransactionMilestoneType;
  title: string;
  status: TransactionMilestoneStatus;
  dueAt?: string;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}