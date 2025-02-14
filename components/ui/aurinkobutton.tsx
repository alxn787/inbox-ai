"use client"
import { getAurinkoAuthUrl } from "@/lib/aurinko";  
import { Button } from "./button"

export const LinkAccountButton = ()=>{
    return <Button onClick={ async()=>{
        const authurl = await getAurinkoAuthUrl('Google')
        console.log(authurl);
    }
    }>
        Link Account</Button>
}