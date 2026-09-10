import type React from "react";
import { listRateLimitPolicies } from '../../lib/api-ecosystem';

export function ApiRateLimitPanel(): React.ReactElement {
  const policies = listRateLimitPolicies();

  return (
    <section>
      <h2>Rate Limits</h2>
      <p>{policies.length} rate-limit policies defined.</p>
    </section>
  );
}