import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
	return (
		<header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
			<div className="text-xl font-semibold">
				<Link href="/" className="hover:text-gray-300 font-cinzel text-3xl  transition-colors">
					Mystic Sheet
				</Link>
			</div>
			<nav className="flex items-center space-x-6">
				<Link href="/" className="text-lg text-gray-300 hover:text-white transition-colors">
					Inicio
				</Link>
				<Link href="/sobre" className="text-lg text-gray-300 hover:text-white transition-colors">
					Sobre
				</Link>
				<Link href="/contato" className="text-lg text-gray-300 hover:text-white transition-colors">
					Contato
				</Link>

				<Link href="/auth">
					<Button className="bg-purple-600 hover:bg-purple-700 text-white transition-colors">
						Acessar
					</Button>
				</Link>

			</nav>
		</header>
	)
}