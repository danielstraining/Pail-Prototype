import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const handler = NextAuth({
  providers: [
    Providers.EmailPassword({
      // Configure the provider
      server: {
        // SMTP configuration for sending verification emails
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      // Other provider options...
    }),
  ],
  // Optional SQL or MongoDB database to persist users
  database: process.env.MONGODB_URI,
})

export {handler as GET, handler as POST};