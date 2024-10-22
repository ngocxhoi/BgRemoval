import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from "#auth";

const config = useRuntimeConfig();

export default NuxtAuthHandler({
  // TODO: SET A STRONG SECRET, SEE https://sidebase.io/nuxt-auth/configuration/nuxt-auth-handler#secret
  secret: config.authSecret || "my-auth-secret",
  // TODO: ADD YOUR OWN AUTHENTICATION PROVIDER HERE, READ THE DOCS FOR MORE: https://sidebase.io/nuxt-auth
  providers: [
    // GithubProvider.default({
    //   clientId: process.env.GITHUB_CLIENT_ID || 'enter-your-client-id-here',
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET || 'enter-your-client-secret-here'
    // }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GoogleProvider.default({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      async authorize(credentials: { email: string; password: string }) {
        const user = await $fetch("/api/db/user", {
          method: "GET",
          params: {
            email: credentials.email,
          },
        });

        if (!user) {
          throw createError({
            statusCode: 401,
            statusMessage: "User not found",
          });
        }

        const isValid =
          credentials.email === user.email &&
          credentials.password === user.password;

        if (!isValid) {
          throw createError({
            statusCode: 401,
            statusMessage: "Invalid credentials",
          });
        }

        return {
          ...user,
          password: undefined,
        };
      },
    }),
  ],

  pages: {
    signIn: "/login",
    error: "error",
  },

  session: {
    strategy: "jwt",
    updateAge: 30 * 60,
    maxAge: 60 * 60,
  },

  callbacks: {
    // async signIn({ account, profile }) {
    //   if (account?.provider === "google") {
    //     return (
    //       // @ts-ignore
    //       profile?.email_verified && profile?.email.endsWith("@example.com")
    //     );
    //   }
    //   return true; // Do different verification for other providers that don't have `email_verified`
    // },

    async jwt({ token, account }) {
      if (account?.type == "oauth") {
        const user = await $fetch("/api/db/user", {
          method: "GET",
          params: {
            email: token.email,
          },
        });

        if (user) {
          return (token = {
            ...token,
            ...user,
          });
        }

        const userCreate = await $fetch("/api/db/user", {
          method: "POST",
          body: {
            email: token.email,
            password: "123123123",
            username: token.name,
            photo: token.picture,
          },
        });

        return (token = {
          ...token,
          ...userCreate,
        });
      }

      const user = await $fetch("/api/db/user", {
        method: "GET",
        params: {
          email: token.email,
        },
      });

      if (!user)
        throw createError({ statusCode: 401, statusMessage: "User not found" });

      token = {
        ...token,
        ...user,
      };
      return token;
    },

    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
});
