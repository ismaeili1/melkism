import type { SystemRole } from "./role.types";
import type { AccessRequest, AccessDecision } from "./resource-access.types";
import { RbacService } from "./rbac.service";

export class AccessControlService {
  constructor(
    private readonly rbac: RbacService = new RbacService()
  ) {}

  evaluate(
    request: AccessRequest,
    roles: SystemRole[]
  ): AccessDecision {
    const now = new Date().toISOString();

    if (!request.identityId) {
      return {
        allowed: false,
        reason: "anonymous",
        evaluatedAt: now,
      };
    }

    const allowed = this.rbac.hasPermission(
      roles,
      request.resource.type,
      request.action
    );

    return {
      allowed,
      reason: allowed
        ? "allowed"
        : "missing_permission",
      evaluatedAt: now,
    };
  }
}