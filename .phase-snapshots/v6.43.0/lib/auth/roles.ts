export const USER_ROLES = [
  "USER",
  "EDITOR",
  "ANALYST",
  "MODERATOR",
  "ADMIN",
  "SUPERADMIN",
] as const;

export type UserRole = (typeof USER_ROLES)[number];

export const ROLE_WEIGHT: Record<UserRole, number> = {
  USER: 10,
  EDITOR: 20,
  ANALYST: 30,
  MODERATOR: 40,
  ADMIN: 50,
  SUPERADMIN: 60,
};

export const PERMISSIONS = [
  "profile:read",
  "profile:write",
  "content:read",
  "content:create",
  "content:edit",
  "content:publish",
  "content:archive",
  "source:read",
  "source:create",
  "source:edit",
  "taxonomy:manage",
  "media:manage",
  "intelligence:read",
  "intelligence:manage",
  "users:read",
  "users:manage",
  "system:manage",
] as const;

export type Permission = (typeof PERMISSIONS)[number];

const ROLE_PERMISSIONS: Record<UserRole, readonly Permission[]> = {
  USER: [
    "profile:read",
    "profile:write",
    "content:read",
    "source:read",
    "intelligence:read",
  ],

  EDITOR: [
    "profile:read",
    "profile:write",
    "content:read",
    "content:create",
    "content:edit",
    "source:read",
    "source:create",
    "source:edit",
    "media:manage",
    "intelligence:read",
  ],

  ANALYST: [
    "profile:read",
    "profile:write",
    "content:read",
    "source:read",
    "source:create",
    "source:edit",
    "intelligence:read",
    "intelligence:manage",
  ],

  MODERATOR: [
    "profile:read",
    "profile:write",
    "content:read",
    "content:edit",
    "content:publish",
    "content:archive",
    "source:read",
    "source:edit",
    "media:manage",
    "intelligence:read",
    "users:read",
  ],

  ADMIN: [
    "profile:read",
    "profile:write",
    "content:read",
    "content:create",
    "content:edit",
    "content:publish",
    "content:archive",
    "source:read",
    "source:create",
    "source:edit",
    "taxonomy:manage",
    "media:manage",
    "intelligence:read",
    "intelligence:manage",
    "users:read",
    "users:manage",
  ],

  SUPERADMIN: [
    "profile:read",
    "profile:write",
    "content:read",
    "content:create",
    "content:edit",
    "content:publish",
    "content:archive",
    "source:read",
    "source:create",
    "source:edit",
    "taxonomy:manage",
    "media:manage",
    "intelligence:read",
    "intelligence:manage",
    "users:read",
    "users:manage",
    "system:manage",
  ],
};

export function isUserRole(value: unknown): value is UserRole {
  return (
    typeof value === "string" &&
    USER_ROLES.includes(value as UserRole)
  );
}

export function getRolePermissions(
  role: UserRole
): readonly Permission[] {
  return ROLE_PERMISSIONS[role];
}

export function hasPermission(
  role: UserRole,
  permission: Permission
): boolean {
  return ROLE_PERMISSIONS[role].includes(permission);
}

export function hasMinimumRole(
  role: UserRole,
  minimumRole: UserRole
): boolean {
  return ROLE_WEIGHT[role] >= ROLE_WEIGHT[minimumRole];
}
