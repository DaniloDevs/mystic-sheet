import { signOut } from "@/services/auth"
import { Button } from "./ui/button"


export default async function SignOutButton() {
     return (
          <form action={async () => {
               "use server"
               await signOut()
          }}>
               <Button
                    variant="outline"
                    type="submit"
                    className="w-full tracking-wide font-normal "
               >
                    Sair
               </Button>
          </form>
     )
}