import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: "Mystic Sheet",
	description: "Gerenciador de fichas de rpg",
	icons: "./img/logo.png",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body>{children}</body>
		</html>
	);
}
