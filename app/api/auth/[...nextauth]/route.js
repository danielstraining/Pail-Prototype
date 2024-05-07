import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDB } from "@utils/database";
import Supplier from "@models/supplier";
import { hash, compare } from "bcryptjs";


export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        await connectToDB();
        // Check the user exists in the first place and is activated
        const supplier = await Supplier.findOne({
          email: credentials.email
        })

        if (!supplier) {
          console.log("No user found...")
          return null;
        } else if (!supplier?.active) {
          console.log("Account is not activated...")
          return null;
        } else if (!await compare(credentials.password, supplier.password)) {
          console.log("Passwords do not match...")
          return null
        } else {
          console.log("Credentials valid. Signing in...")
          return { email: supplier.email }
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
