import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

/**
 * Extend NextAuth types for custom fields
 */
declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }

  interface User {
    token?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}

/**
 * NextAuth configuration (authOptions)
 */
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        const user = await res.json();
        if (!res.ok) throw new Error(user.message || "Login failed");

        return {
          id: user.user._id,
          name: user.user.name,
          email: user.user.email,
          token: user.token,
        };
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  pages: { signIn: "/auth/login" },

  callbacks: {
    // Store token in JWT
    async jwt({ token, user }) {
      if (user) token.accessToken = user.token;
      return token;
    },
    // Expose token in session
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
};
