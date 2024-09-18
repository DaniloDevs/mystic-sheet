import Image from "next/image"

import { Button } from "@/components/ui/button"
import { auth, signIn } from "@/services/auth"

export const description =
     "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image."

export async function AuthForm() {
     const session = await auth()
     console.log(session)
     return (
          <div className="w-full lg:grid h-screen lg:grid-cols-2 ">
               <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[350px] gap-6">
                         <div className="grid gap-2 text-center">
                              <h1 className="text-3xl font-bold">Mystic Sheat</h1>
                              <p className="text-balance text-muted-foreground">
                                   Comece a gerenciar seus personagens
                              </p>
                         </div>
                         <div className="grid gap-4">
                              <form action={async () => {
                                   "use server"
                                   await signIn("google")
                              }}>
                                   <Button variant="outline" type="submit" className="w-full tracking-wide font-normal ">Entrar com Google</Button>
                              </form>
                         </div>
                    </div>
               </div>
               <div className="hidden bg-muted lg:block">
                    <Image
                         src="/rpg.jpg"
                         alt="Image"
                         width="1920"
                         height="1080"
                         className="h-screen w-full bg-cover object-cover dark:brightness-[0.2] dark:grayscale"
                    />
               </div>
          </div>
     )
}
