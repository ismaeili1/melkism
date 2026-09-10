import type React from "react";
import { getApiHealth } from '../../lib/api-ecosystem';

export function ApiHealthPanel(): React.ReactElement {
  const health = getApiHealth();

  return (
    <section>
      <h2>API Health</h2>
      <p>{health.filter((item) => item.status === 'healthy').length} APIs currently marked healthy in foundation state.</p>
    </section>
  );
}