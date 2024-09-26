import { Button } from "../ui/button";

export default function LandPageMain() {
	return (
		<main className="mx-12 h-full">
			<section className="flex flex-col items-center justify-center min-h-screen text-white px-4 gap-6 py-12">
				<div>
					<h1 className="text-6xl font-cinzel text-center mb-2">
						Forje suas Lendas
					</h1>
					<p className="text-4xl font-cinzel text-gray-300 text-center">
						Controle seu Destino
					</p>
				</div>
				<Button className="bg-purple-600 hover:bg-purple-700 text-wzhite text-xl px-10 py-5 rounded-full transition-colors">
					Comece sua Jornada!
				</Button>
			</section>

		</main>
	);
}
