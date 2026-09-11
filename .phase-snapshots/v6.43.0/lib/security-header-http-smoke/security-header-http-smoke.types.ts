export type HttpHeaderExpectation = {
  name: string;
  expectedValue: string;
  requiredOn: "global" | "api";
};

export type HttpHeaderCheckResult = {
  name: string;
  expectedValue: string;
  actualValue: string | null;
  matched: boolean;
};

export type HttpSmokeReport = {
  phase: "v6.16";
  status: "ready" | "pass" | "fail";
  generatedAt: string;
  expectations: HttpHeaderExpectation[];
  checks: HttpHeaderCheckResult[];
};
