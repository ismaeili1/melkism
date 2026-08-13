export const melkistIntegrationConfig = {
  enabled:
    process.env.MELKIST_INTEGRATION_ENABLED === "true",

  baseUrl:
    process.env.MELKIST_API_BASE_URL || "",

  apiKey:
    process.env.MELKIST_API_KEY || "",
};
