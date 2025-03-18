import NextAuth from "next-auth";
import Facebook from "next-auth/providers/facebook";
import { client } from "@/sanity/lib/client";
import { USER_BY_FACEBOOK_ID_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "./sanity/lib/write-client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, profile }) {
      const existingUser = await client.fetch(USER_BY_FACEBOOK_ID_QUERY, {
        id: profile?.id,
      });

      if (!existingUser) {
        await writeClient.create({
          _type: "user",
          id: profile?.id,
          name: user?.name,
          email: user?.email,
          image: user?.image,
          userCategory: "user",
        });
      }
      return true;
    },
  },
});
