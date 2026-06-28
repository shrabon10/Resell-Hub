import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db('monkey');

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  database: mongodbAdapter(db, {
    client
  }),

  user: {
    additionalFields: {
      role: {
        type: "string", 
        defaultValue: "buyer",
        input: true,
      },
      status: {
        type: "string",
        defaultValue: 'active'
      },
      phone: {
        type: "string",
        defaultValue: '01000000000'
      },
      address: {
        type: "string",
        defaultValue: 'Dhaka/Bangladesh'
      }
    }
  },

  plugins: [jwt()],
  
  session: {
    cookieCache: {
      enabled: true,
      strategy: 'jwt',
      maxAge: 60 * 60 * 24 * 7
    }
  },
});