import type {
  ComplianceAssessment,
  ComplianceControl,
  ComplianceFramework,
  ComplianceStatus,
} from "./compliance.types";

export class ComplianceService {
  assess(
    framework: ComplianceFramework,
    controls: ComplianceControl[],
    organizationId?: string,
    tenantId?: string
  ): ComplianceAssessment {
    const applicable = controls.filter(
      (control) => control.required
    );

    const positive = applicable.filter(
      (control) => control.status === "compliant"
    ).length;

    const score =
      applicable.length > 0
        ? (positive / applicable.length) * 100
        : 0;

    let status: ComplianceStatus =
      "not_assessed";

    if (applicable.length > 0) {
      if (score >= 95) {
        status = "compliant";
      } else if (score >= 70) {
        status = "partially_compliant";
      } else {
        status = "non_compliant";
      }
    }

    const findings = controls
      .filter(
        (control) =>
          control.status === "non_compliant" ||
          control.status === "partially_compliant"
      )
      .map(
        (control) =>
          `${control.code}: ${control.title}`
      );

    return {
      id: crypto.randomUUID(),
      organizationId,
      tenantId,
      framework,
      status,
      score,
      controls,
      findings,
      recommendations: [],
      assessedAt: new Date().toISOString(),
    };
  }
}