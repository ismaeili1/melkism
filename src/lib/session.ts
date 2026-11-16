import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // یا مسیر فایل تنظیمات NextAuth شما
import { UserRole } from "@prisma/client";

export interface CurrentUser {
  id: string;
  email?: string | null;
  role: UserRole;
}

export async function getCurrentUser(): Promise<CurrentUser | null> {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return null;
  }

  return {
    id: (session.user as any).id || '',
    email: session.user.email,
    role: (session.user as any).role || 'USER',
  };
}