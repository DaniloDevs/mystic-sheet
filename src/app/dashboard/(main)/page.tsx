import SignOutButton from "@/components/signOutButton"
import { signOut } from "@/services/auth"


export default function Page() {
     return (
          <div className=" flex justify-center  items-center h-screen">
               <SignOutButton />
          </div>
     )
}