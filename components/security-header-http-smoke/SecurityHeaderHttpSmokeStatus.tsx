type SecurityHeaderHttpSmokeStatusProps = {
  locale: string;
};

export function SecurityHeaderHttpSmokeStatus(
  props: SecurityHeaderHttpSmokeStatusProps
) {
  return (
    <section
      aria-labelledby="security-header-http-smoke-title"
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "12px",
        padding: "24px",
        maxWidth: "760px",
        margin: "32px auto"
      }}
    >
      <h1 id="security-header-http-smoke-title">
        MELKISM v6.16 HTTP Security Header Smoke Verification
      </h1>

      <p>
        Locale: <strong>{props.locale}</strong>
      </p>

      <p>
        This page represents the production verification surface for the
        active HTTP security-header policy.
      </p>

      <p>
        The authoritative verification is performed by the production smoke
        test script against real HTTP responses.
      </p>
    </section>
  );
}
