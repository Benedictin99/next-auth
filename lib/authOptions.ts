import { NextAuthOptions } from "next-auth";
import GitProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GitProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_DECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
};
