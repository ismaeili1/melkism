type ProductionRuntimeConfigStatusProps = {
  locale: string;
};

export function ProductionRuntimeConfigStatus(
  props: ProductionRuntimeConfigStatusProps
) {
  return (
    <section
      aria-labelledby="production-runtime-config-title"
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "12px",
        padding: "24px",
        maxWidth: "760px",
        margin: "32px auto"
      }}
    >
      <h1 id="production-runtime-config-title">
        MELKISM v6.17 Production Runtime Configuration
      </h1>

      <p>
        Locale: <strong>{props.locale}</strong>
      </p>

      <p>
        Production runtime configuration is governed by the MELKISM
        environment contract and deployment validation process.
      </p>

      <p>
        Secret values are never displayed by this status surface.
      </p>
    </section>
  );
}

