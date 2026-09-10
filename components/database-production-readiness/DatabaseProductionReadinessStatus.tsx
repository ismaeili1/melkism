type DatabaseProductionReadinessStatusProps = {
  locale: string;
};

export function DatabaseProductionReadinessStatus(
  props: DatabaseProductionReadinessStatusProps
) {
  return (
    <section
      aria-labelledby="database-production-readiness-title"
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "12px",
        padding: "24px",
        maxWidth: "760px",
        margin: "32px auto"
      }}
    >
      <h1 id="database-production-readiness-title">
        MELKISM v6.18 Database & Prisma Production Readiness
      </h1>

      <p>
        Locale: <strong>{props.locale}</strong>
      </p>

      <p>
        Database and Prisma readiness are controlled through the production
        database contract and deployment validation process.
      </p>

      <p>
        Credentials and connection strings are never displayed by this
        surface.
      </p>
    </section>
  );
}
