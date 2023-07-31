import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    callbacks: {
        async signIn({account, profile }) {
          if (account.provider === "google" && profile.email_verified && profile.email.endsWith("@seas.upenn.com")) {
            return  Promise.resolve(true)
            } else {
                return Promise.resolve(false)
            }
          }
        },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    secret: process.env.JWT_SECRET
});
