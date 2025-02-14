"use server"

import { authConfig } from "@/app/lib/auth";
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";


export const getAurinkoAuthUrl = async(serviceType:'Google')=>{

    const session = await getServerSession(authConfig);
    if(!session?.user){
        return NextResponse.json({
            message:"user not logged in"
        })
    }

    const params = new URLSearchParams({
        client_id: process.env.AURINKO_CLIENT_ID as string??"",
        serviceType,
        scopes: 'Mail.Read, Mail.ReadWrite, Mail.Send, Mail.Drafts, Mail.all',
        responsetype: "code",
        returnurl: `http://localhost:3000/api/aurinko/callback`
    })
    return `https://aurinko.io/v1/auth/authorize?${params.toString()}`
}
