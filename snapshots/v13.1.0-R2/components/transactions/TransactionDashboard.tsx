"use client";

import TransactionSummary from "./TransactionSummary";
import TransactionTimeline from "./TransactionTimeline";
import TransactionParties from "./TransactionParties";

export default function TransactionDashboard() {
  return (
    <section
      aria-label="Transaction Platform"
      style={{
        display: "grid",
        gap: "1.5rem",
      }}
    >
      <TransactionSummary />
      <TransactionTimeline />
      <TransactionParties />
    </section>
  );
}
