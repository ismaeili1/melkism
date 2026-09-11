import type { TransactionParty } from "@/lib/transactions/transaction-party.types";

interface TransactionPartiesProps {
  parties?: TransactionParty[];
}

export default function TransactionParties({
  parties = [],
}: TransactionPartiesProps) {
  return (
    <section aria-label="Transaction parties">
      <h2>Transaction Parties</h2>

      {parties.length === 0 ? (
        <p>No transaction parties available.</p>
      ) : (
        parties.map((party) => (
          <div key={party.id}>
            {party.displayName ?? party.id} — {party.role}
          </div>
        ))
      )}
    </section>
  );
}
