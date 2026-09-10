import type React from "react";
import { listEndpoints } from '../../lib/api-ecosystem';

export function ApiEndpointPanel(): React.ReactElement {
  const endpoints = listEndpoints();

  return (
    <section>
      <h2>API Endpoints</h2>
      <p>{endpoints.length} registered endpoints.</p>
    </section>
  );
}