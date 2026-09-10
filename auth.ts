import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { authConfig } from "@/auth.config";
import { getAuthPrisma } from "@/lib/auth/prisma";
import { verifyPassword } from "@/lib/auth/password";

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,

  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        const email =
          typeof credentials?.email === "string"
            ? credentials.email.trim().toLowerCase()
            : "";

        const password =
          typeof credentials?.password === "string"
            ? credentials.password
            : "";

        if (!email || !password) {
          return null;
        }

        if (password.length < 12) {
          return null;
        }

        const user = await getAuthPrisma().user.findUnique({
          where: { email },
          select: {
            id: true,
            email: true,
            displayName: true,
            isActive: true,
            passwordHash: true,
            role: true,
          },
        });

        if (!user || !user.isActive || !user.passwordHash) {
          return null;
        }

        const valid = await verifyPassword(
          password,
          user.passwordHash
        );

        if (!valid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.displayName ?? undefined,
          role: user.role,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) {
        token.sub = user.id;
      }

      if (user?.role) {
        token.role = user.role;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }

      if (session.user && token.role) {
        session.user.role = token.role;
      }

      return session;
    },
  },
});


