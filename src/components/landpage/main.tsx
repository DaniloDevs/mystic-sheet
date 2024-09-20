import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";


export default function LandPageMain() {
     return (
          <main className="mx-12 h-full">
               <section id="inicio" className="w-full h-[88vh] flex flex-col items-center content-center gap-4 justify-center">
                    <div className="text-center gap-2 flex flex-col">
                         <h1 className="text-6xl italic font-cinzel">Forje suas Lendas</h1>
                         <h2 className="text-4xl font-cinzel">Controle seu Destino</h2>
                    </div>
                    <Link href="/auth">
                         <Button variant='outline' className="text-2xl font-cinzel rounded-full  py-6 px-20 text-white bg-violet-700 hover:text-white hover:bg-violet-800/85">
                              Forje Agora!
                         </Button>
                    </Link>
               </section>
          </main>
     )
}