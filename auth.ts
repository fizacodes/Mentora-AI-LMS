import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";
import { Role } from "./generated/prisma/enums";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "jwt",
  },

  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    Credentials({
      name: "credentials",

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

  console.log("LOGIN EMAIL:", credentials?.email);


  const user = await prisma.user.findUnique({
    where:{
      email: credentials?.email as string
    }
  });


  console.log("DATABASE USER:", user);


  if(!user){
    console.log("NO USER FOUND");
    return null;
  }


  console.log("STORED HASH:", user.password);


  const match = await bcrypt.compare(
    credentials?.password as string,
    user.password!
  );


  console.log("PASSWORD MATCH:", match);


  if(!match){
    return null;
  }


  return {
    id:user.id,
    name:user.name,
    email:user.email,
    role:user.role
  };
}
    })
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user).role;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as Role;
      }

      return session;
    },
  },
});