import SignIn from '@app/signin/page';
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorise(credentials){
        const user = {id: "1"}
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    SignIn: "/",
  },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}
