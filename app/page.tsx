"use client"

import { LinkAccountButton } from "@/components/ui/aurinkobutton";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

export default function Home() {

  const session = useSession();
  return (
      <div>
        Hi there
        {session.data?.user?`${session.data.user.name}`:"Logged out"}
        {session.data?.user?<button className="border border-gray-300 p-2 rounded-md" onClick={()=>signOut()}>Sign out</button>:<button className="border border-gray-300 p-2 rounded-full" onClick={()=>signIn('google')}>Sign in</button>}
        <Button> hi there</Button>
        <LinkAccountButton/>
    </div>
  );
}
