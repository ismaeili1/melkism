import type React from "react";
import { listApis } from '../../lib/api-ecosystem';

export function ApiRegistryPanel(): React.ReactElement {
  const apis = listApis();

  return (
    <section>
      <h2>API Registry</h2>
      <p>{apis.length} registered APIs.</p>
    </section>
  );
}