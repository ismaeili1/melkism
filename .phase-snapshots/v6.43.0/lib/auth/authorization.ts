import { redirect } from "next/navigation";

import { auth } from "@/auth";
import {
  type Permission,
  type UserRole,
  hasMinimumRole,
  hasPermission,
  isUserRole,
} from "@/lib/auth/roles";

import {
  requireResourceAccess,
  type ResourceAccessRequest,
} from "@/lib/auth/resource-access";

export type AuthorizationContext = {
  userId: string;
  role: UserRole;
  email?: string | null;
};

export async function getAuthorizationContext(): Promise<
  AuthorizationContext | null
> {
  const session = await auth();

  if (!session?.user?.id) {
    return null;
  }

  const rawRole = session.user.role;

  if (!isUserRole(rawRole)) {
    return null;
  }

  return {
    userId: session.user.id,
    role: rawRole,
    email: session.user.email,
  };
}

export async function requireAuthentication(): Promise<AuthorizationContext> {
  const context = await getAuthorizationContext();

  if (!context) {
    redirect("/login");
  }

  return context;
}

export async function requireRole(
  minimumRole: UserRole
): Promise<AuthorizationContext> {
  const context = await requireAuthentication();

  if (!hasMinimumRole(context.role, minimumRole)) {
    throw new Error("FORBIDDEN");
  }

  return context;
}

export async function requirePermission(
  permission: Permission
): Promise<AuthorizationContext> {
  const context = await requireAuthentication();

  if (!hasPermission(context.role, permission)) {
    throw new Error("FORBIDDEN");
  }

  return context;
}

export function can(
  role: UserRole,
  permission: Permission
): boolean {
  return hasPermission(role, permission);
}
export async function requireResourcePermission(
  request: ResourceAccessRequest
) {
  return requireResourceAccess(request);
}
