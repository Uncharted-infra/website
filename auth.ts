/**
 * Auth.js config. Env vars and backend infra are configured manually.
 * Providers are only registered when their env vars are set.
 */
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";

const providers = [];

if (process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET) {
  providers.push(Google);
}

if (
  process.env.AUTH_MICROSOFT_ENTRA_ID_ID &&
  process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET
) {
  providers.push(
    MicrosoftEntraID({
      clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
      clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
      issuer:
        process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER ??
        "https://login.microsoftonline.com/common/v2.0",
    })
  );
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  trustHost: true,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      // Protect routes as needed; for now allow all
      return true;
    },
  },
});
