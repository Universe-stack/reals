import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "../../../../../helpers/server-helpers";
import prisma from "../../../../../prisma";
import bcrypt from "bcrypt"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions={
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],

    //secret: process.env.NEXTAUTH_SECRET
}

        // CredentialsProvider({
        //     name: "creds",
        //     credentials:{
        //         email:{label: "Email", placeholder: "Enter Email"},
        //         password:{label: "Password", placeholder: "Password"},
        //     },
        //     async (credentials){
        //         if (!credentials || !credentials.email || !credentials.password)
        //             return null;
        //         try{
        //             await connectToDB();
        //             const user = await prisma.user.findFirst({where:{email:credentials.email}})
        //             if(user?.hashedPassword) {
        //                 return null;
        //             }

        //             const isPasswordCorrect = await bcrypt.compare(
        //                 credentials.password,
        //                 user?.hashedPassword as string
        //             );

        //             if(!isPasswordCorrect) {
        //                 return user
        //             }
        //             return null;
        //         }catch(error){
        //             console.log(error)
        //             return null;
        //         }finally{
        //             await prisma.$disconnect()
        //         }
        //     }

        // })

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}

