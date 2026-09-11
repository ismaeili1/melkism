import type React from "react";
import { getUsageSummary } from '../../lib/api-ecosystem';

export function ApiUsagePanel(): React.ReactElement {
  const summary = getUsageSummary();

  return (
    <section>
      <h2>API Usage</h2>
      <p>{summary.totalRequests} requests recorded in the foundation sample.</p>
    </section>
  );
}
