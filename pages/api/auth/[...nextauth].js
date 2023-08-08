import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email.endsWith("@seas.upenn.edu");
      }
    },
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
});
