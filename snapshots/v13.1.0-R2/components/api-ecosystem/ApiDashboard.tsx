import type React from "react";
import { ApiRegistryPanel } from './ApiRegistryPanel';
import { ApiEndpointPanel } from './ApiEndpointPanel';
import { ApiConsumersPanel } from './ApiConsumersPanel';
import { ApiUsagePanel } from './ApiUsagePanel';
import { ApiRateLimitPanel } from './ApiRateLimitPanel';
import { ApiQuotaPanel } from './ApiQuotaPanel';
import { ApiWebhooksPanel } from './ApiWebhooksPanel';
import { ApiHealthPanel } from './ApiHealthPanel';
import { DeveloperPortalPanel } from './DeveloperPortalPanel';

export function ApiDashboard(): React.ReactElement {
  return (
    <section aria-label="MELKISM API Ecosystem">
      <header>
        <h1>API Ecosystem</h1>
        <p>Unified API governance, discovery and developer foundation.</p>
      </header>

      <ApiRegistryPanel />
      <ApiEndpointPanel />
      <ApiConsumersPanel />
      <ApiUsagePanel />
      <ApiRateLimitPanel />
      <ApiQuotaPanel />
      <ApiWebhooksPanel />
      <ApiHealthPanel />
      <DeveloperPortalPanel />
    </section>
  );
}
