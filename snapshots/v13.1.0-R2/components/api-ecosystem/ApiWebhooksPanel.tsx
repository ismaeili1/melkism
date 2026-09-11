import type React from "react";
import { listWebhooks, listSubscriptions } from '../../lib/api-ecosystem';

export function ApiWebhooksPanel(): React.ReactElement {
  const webhooks = listWebhooks();
  const subscriptions = listSubscriptions();

  return (
    <section>
      <h2>Webhooks & Subscriptions</h2>
      <p>{webhooks.length} webhooks and {subscriptions.length} subscriptions defined.</p>
    </section>
  );
}
