import Link from "next/link";

export default function Header() {
     return (


          <header className="px-4 py-6 border-b h-14 flex items-center">
               <Link
                    href="/"
                    className="flex items-center justify-center"
               >
                    <span className="font-bold">Mystic Sheet</span>
               </Link>

               <nav className="ml-auto flex gap-4 text-center items-center conte sm:gap-6">
                    <Link
                         href="/"
                         className="text-sm font-medium hover:underline underline-offset-4"
                    >
                         Inicio
                    </Link>
                    <Link
                         href="/"
                         className="text-sm font-medium hover:underline underline-offset-4"
                    >
                         Sobre
                    </Link>
                    <Link
                         href="/"
                         className="text-sm font-medium hover:underline underline-offset-4"
                    >
                         Contato
                    </Link>
                    <Link
                         href="#"
                         className="text-sm font-medium hover:rounded-2xl hover:bg-violet-700 underline-offset-4 px-5 py-1 rounded-xl text-white bg-violet-600 duration-500"
                    >
                         Acessar
                    </Link>
               </nav>
          </header>
     )
}