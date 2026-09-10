import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const path = nextUrl.pathname;

      const isProtected =
        path.startsWith("/dashboard") ||
        path.startsWith("/admin") ||
        path.startsWith("/api/admin") ||
        path.startsWith("/api/management");

      if (!isProtected) {
        return true;
      }

      return isLoggedIn;
    },
  },  providers: [],
} satisfies NextAuthConfig;

