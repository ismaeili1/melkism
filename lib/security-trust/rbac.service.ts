import type { SystemRole } from "./role.types";
import type {
  Permission,
  PermissionAction,
} from "./permission.types";

const rolePermissions: Record<SystemRole, readonly Permission[]> = {
  anonymous: [],
  user: [
    {
      id: "property.read",
      resource: "property",
      action: "read",
    },
  ],
  verified_user: [
    {
      id: "property.read",
      resource: "property",
      action: "read",
    },
    {
      id: "property.create",
      resource: "property",
      action: "create",
    },
  ],
  agent: [
    {
      id: "property.read",
      resource: "property",
      action: "read",
    },
    {
      id: "property.create",
      resource: "property",
      action: "create",
    },
    {
      id: "property.update",
      resource: "property",
      action: "update",
    },
  ],
  broker: [
    {
      id: "property.read",
      resource: "property",
      action: "read",
    },
    {
      id: "property.create",
      resource: "property",
      action: "create",
    },
    {
      id: "property.update",
      resource: "property",
      action: "update",
    },
    {
      id: "listing.publish",
      resource: "listing",
      action: "publish",
    },
  ],
  architect: [
    {
      id: "property.read",
      resource: "property",
      action: "read",
    },
    {
      id: "architecture.read",
      resource: "architecture",
      action: "read",
    },
    {
      id: "architecture.create",
      resource: "architecture",
      action: "create",
    },
  ],
  developer: [],
  investor: [],
  organization_admin: [],
  moderator: [],
  analyst: [],
  operator: [],
  security_admin: [],
  system_admin: [],
  service: [],
};

export class RbacService {
  hasPermission(
    roles: SystemRole[],
    resource: string,
    action: PermissionAction
  ): boolean {
    return roles.some((role) =>
      rolePermissions[role].some(
        (permission) =>
          permission.resource === resource &&
          permission.action === action
      )
    );
  }

  getPermissions(
    roles: SystemRole[]
  ): Permission[] {
    const permissions = roles.flatMap(
      (role) => rolePermissions[role]
    );

    return Array.from(
      new Map(
        permissions.map((permission) => [
          permission.id,
          permission,
        ])
      ).values()
    );
  }
}