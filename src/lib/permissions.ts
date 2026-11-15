export type Role = "SUPER_ADMIN" | "EDITOR" | "ANALYST" | "SUPPORT";

export interface Permission {
  canManageAdmins: boolean;
  canManageUsers: boolean;
  canPublishNews: boolean;
  canManageMarketReports: boolean;
  canEditRegulations: boolean;
}

export const ROLE_PERMISSIONS: Record<Role, Permission> = {
  SUPER_ADMIN: {
    canManageAdmins: true,
    canManageUsers: true,
    canPublishNews: true,
    canManageMarketReports: true,
    canEditRegulations: true,
  },
  EDITOR: {
    canManageAdmins: false,
    canManageUsers: false,
    canPublishNews: true,
    canManageMarketReports: false,
    canEditRegulations: true,
  },
  ANALYST: {
    canManageAdmins: false,
    canManageUsers: false,
    canPublishNews: true,
    canManageMarketReports: true,
    canEditRegulations: false,
  },
  SUPPORT: {
    canManageAdmins: false,
    canManageUsers: true,
    canPublishNews: false,
    canManageMarketReports: false,
    canEditRegulations: false,
  },
};