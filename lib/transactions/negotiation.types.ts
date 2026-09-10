export type NegotiationId = string;

export type NegotiationStatus =
  | "open"
  | "paused"
  | "agreed"
  | "closed"
  | "cancelled";

export interface NegotiationMessage {
  id: string;
  negotiationId: string;
  partyId: string;
  message: string;
  createdAt: string;
}

export interface NegotiationRecord {
  id: NegotiationId;
  transactionId: string;
  status: NegotiationStatus;
  round: number;
  startedAt: string;
  updatedAt: string;
  messages?: NegotiationMessage[];
}