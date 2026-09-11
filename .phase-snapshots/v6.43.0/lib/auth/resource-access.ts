import {
  hasPermission,
  type Permission,
  type UserRole,
} from "@/lib/auth/roles";

import {
  getPermissionForAction,
  type Action,
  type PolicyContext,
  type PolicyDecision,
  type Resource,
} from "@/lib/auth/policy";

export type ResourceOwnership = {
  ownerId?: string | null;
};

export type ResourceAccessRequest = {
  resource: Resource;
  action: Action;
  context: PolicyContext;
  ownership?: ResourceOwnership;
};

export type ResourceAccessResult = {
  allowed: boolean;
  decision: PolicyDecision;
  permission: Permission | null;
  reason: string;
};

const ADMIN_ROLES: readonly UserRole[] = [
  "ADMIN",
  "SUPERADMIN",
];

export function isAdminRole(role: UserRole): boolean {
  return ADMIN_ROLES.includes(role);
}

export function evaluateResourceAccess(
  request: ResourceAccessRequest
): ResourceAccessResult {
  const {
    resource,
    action,
    context,
    ownership,
  } = request;

  if (!context.authenticated || !context.userId) {
    return {
      allowed: false,
      decision: "DENY",
      permission: getPermissionForAction(resource, action),
      reason: "AUTHENTICATION_REQUIRED",
    };
  }

  if (isAdminRole(context.role)) {
    return {
      allowed: true,
      decision: "ALLOW_ADMIN",
      permission: getPermissionForAction(resource, action),
      reason: "ADMIN_POLICY",
    };
  }

  const permission =
    getPermissionForAction(resource, action);

  if (permission && hasPermission(context.role, permission)) {
    return {
      allowed: true,
      decision: "ALLOW",
      permission,
      reason: "ROLE_PERMISSION",
    };
  }

  if (
    action === "update" ||
    action === "delete"
  ) {
    const ownerId = ownership?.ownerId ?? null;

    if (
      ownerId &&
      ownerId === context.userId
    ) {
      return {
        allowed: true,
        decision: "ALLOW_OWNER",
        permission,
        reason: "RESOURCE_OWNER",
      };
    }
  }

  return {
    allowed: false,
    decision: "DENY",
    permission,
    reason: "POLICY_DENIED",
  };
}

export function isResourceAccessAllowed(
  request: ResourceAccessRequest
): boolean {
  return evaluateResourceAccess(request).allowed;
}

export function requireResourceAccess(
  request: ResourceAccessRequest
): ResourceAccessResult {
  const result = evaluateResourceAccess(request);

  if (!result.allowed) {
    throw new Error(`FORBIDDEN:${result.reason}`);
  }

  return result;
}


