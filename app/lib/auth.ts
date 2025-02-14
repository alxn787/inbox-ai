/* eslint-disable */
import GoogleProvider from "next-auth/providers/google";
import db from "@/app/db"


export const authConfig ={
    secret: process.env.NEXTAUTH_SECRET,
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID??"",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET??""
          })
    ],
    callbacks:{
        async signIn({user, account, profile}:any){
            console.log(user,account,profile);
            const email = user.email;
            const dbuser = await db.user.findFirst({
                where:{
                    email: email
                }
            })
            if(!dbuser){
                await db.user.create({
                    data:{
                        email: email,
                        name: profile?.name,
                        profilepic: profile?.picture
                    }
                })
            }
            return true;
        }
    }

}