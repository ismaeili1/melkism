import type React from "react";
import { listConsumers } from '../../lib/api-ecosystem';

export function ApiConsumersPanel(): React.ReactElement {
  const consumers = listConsumers();

  return (
    <section>
      <h2>API Consumers</h2>
      <p>{consumers.length} consumers defined.</p>
    </section>
  );
}