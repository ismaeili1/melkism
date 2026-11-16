import { prisma } from '@/lib/prisma';
import { UserRole } from '@prisma/client';

export async function hasPermission(role: UserRole, permissionCode: string): Promise<boolean> {
  if (role === 'SUPER_ADMIN') return true;
  const rolePermission = await prisma.rolePermission.findFirst({
    where: { role: role, granted: true, permission: { code: permissionCode } },
  });
  return Boolean(rolePermission);
}

export async function requirePermission(userRole: UserRole, permissionCode: string) {
  const allowed = await hasPermission(userRole, permissionCode);
  if (!allowed) {
    throw new Error('Unauthorized: Missing permission ' + permissionCode);
  }
}