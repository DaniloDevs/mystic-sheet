import SideBar from "@/components/dashboard/sidebar";
import { auth } from "@/services/auth";
import { Session } from "next-auth";
import { PropsWithChildren } from "react";


export default async function Layout({ children }: PropsWithChildren,) {
     const session = await auth()
     return (
          <div className="grid grid-cols-[14rem_1fr] gap-4">
               <SideBar user={session?.user} />

               {children}
          </div>
     )
}