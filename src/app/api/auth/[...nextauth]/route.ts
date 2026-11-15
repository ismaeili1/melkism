import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "موبایل / ایمیل و رمز عبور",
      credentials: {
        identifier: { label: "ایمیل یا موبایل", type: "text" },
        password: { label: "رمز عبور", type: "password" }
      },
      async authorize(credentials) {
        // در اینجا اتصال به دیتابیس یا احراز هویت OTP انجام می‌شود
        if (!credentials?.identifier) return null;

        // نمونه کاربر شبیه‌سازی‌شده برای تست ساختار
        const user = {
          id: "1",
          name: "دکتر مورتضی اسماعیلی",
          email: "morteza.admin@melkism.com",
          role: "SUPER_ADMIN", // یکی از ۶ سطح دسترسی
        };

        return user;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    }
  },
  pages: {
    signIn: "/fa/auth/login",
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };