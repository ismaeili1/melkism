import type { OfferRecord } from "@/lib/transactions/offer.types";

interface OfferPanelProps {
  offers?: OfferRecord[];
}

export default function OfferPanel({
  offers = [],
}: OfferPanelProps) {
  return (
    <section aria-label="Offers">
      <h2>Offers</h2>

      {offers.length === 0 ? (
        <p>No offers available.</p>
      ) : (
        offers.map((offer) => (
          <div key={offer.id}>
            {offer.amount.toLocaleString()} {offer.currency} —{" "}
            {offer.status}
          </div>
        ))
      )}
    </section>
  );
}
