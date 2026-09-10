import type React from "react";
import { listQuotaPolicies } from '../../lib/api-ecosystem';

export function ApiQuotaPanel(): React.ReactElement {
  const policies = listQuotaPolicies();

  return (
    <section>
      <h2>Quotas</h2>
      <p>{policies.length} quota policies defined.</p>
    </section>
  );
}