import type {
  Permission,
  UserRole,
} from "@/lib/auth/roles";

export const RESOURCES = [
  "profile",
  "content",
  "source",
  "taxonomy",
  "media",
  "intelligence",
  "users",
  "system",
] as const;

export type Resource = (typeof RESOURCES)[number];

export const ACTIONS = [
  "read",
  "create",
  "update",
  "delete",
  "publish",
  "archive",
  "manage",
] as const;

export type Action = (typeof ACTIONS)[number];

export type ResourceAction = `${Resource}:${Action}`;

export type PolicyDecision =
  | "ALLOW"
  | "DENY"
  | "ALLOW_OWNER"
  | "ALLOW_ADMIN";

export type PolicyContext = {
  userId: string;
  role: UserRole;
  authenticated: boolean;
};

const RESOURCE_ACTION_PERMISSION_MAP:
  Readonly<Record<ResourceAction, Permission | null>> = {
  "profile:read": "profile:read",
  "profile:create": null,
  "profile:update": "profile:write",
  "profile:delete": null,
  "profile:publish": null,
  "profile:archive": null,
  "profile:manage": "profile:write",

  "content:read": "content:read",
  "content:create": "content:create",
  "content:update": "content:edit",
  "content:delete": "content:edit",
  "content:publish": "content:publish",
  "content:archive": "content:archive",
  "content:manage": "content:edit",

  "source:read": "source:read",
  "source:create": "source:create",
  "source:update": "source:edit",
  "source:delete": "source:edit",
  "source:publish": null,
  "source:archive": null,
  "source:manage": "source:edit",

  "taxonomy:read": null,
  "taxonomy:create": null,
  "taxonomy:update": "taxonomy:manage",
  "taxonomy:delete": "taxonomy:manage",
  "taxonomy:publish": null,
  "taxonomy:archive": null,
  "taxonomy:manage": "taxonomy:manage",

  "media:read": null,
  "media:create": null,
  "media:update": "media:manage",
  "media:delete": "media:manage",
  "media:publish": null,
  "media:archive": null,
  "media:manage": "media:manage",

  "intelligence:read": "intelligence:read",
  "intelligence:create": "intelligence:manage",
  "intelligence:update": "intelligence:manage",
  "intelligence:delete": "intelligence:manage",
  "intelligence:publish": null,
  "intelligence:archive": null,
  "intelligence:manage": "intelligence:manage",

  "users:read": "users:read",
  "users:create": "users:manage",
  "users:update": "users:manage",
  "users:delete": "users:manage",
  "users:publish": null,
  "users:archive": null,
  "users:manage": "users:manage",

  "system:read": null,
  "system:create": null,
  "system:update": "system:manage",
  "system:delete": "system:manage",
  "system:publish": null,
  "system:archive": null,
  "system:manage": "system:manage",
};

export function getPermissionForAction(
  resource: Resource,
  action: Action
): Permission | null {
  return RESOURCE_ACTION_PERMISSION_MAP[`${resource}:${action}`];
}

export function isResource(value: unknown): value is Resource {
  return (
    typeof value === "string" &&
    RESOURCES.includes(value as Resource)
  );
}

export function isAction(value: unknown): value is Action {
  return (
    typeof value === "string" &&
    ACTIONS.includes(value as Action)
  );
}
