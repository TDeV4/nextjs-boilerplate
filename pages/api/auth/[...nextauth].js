import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  callbacks: {
    async signIn({ account, profile}) { // Include idToken in the parameters
      if (account.provider === "google") {
        return profile.email.endsWith("@seas.upenn.edu");
      }
    },
    async jwt({ token, account, user}) {
      if (account) {
        //save the access token and expiration the JWT on the initial login
        token.accessToken = account.access_token;
        token.idToken = account?.id_token;
        token.expires = Math.floor(Date.now() / 1000 + account.expires_in);
        token.error = "Token Unexpired";
      }

      if (token.expires && (Date.now() / 1000 > token.expires * 1000)) {
        token.error = "Token Expired";
      }
      return token;
    },

    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      session.idToken = token.idToken; 
      session.error = token.error;
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

