import Footer from "@/components/landpage/footer";
import LandPageHeader from "@/components/landpage/header";
import LandPageMain from "@/components/landpage/main";

export default function Home() {
	return (
		<>
			<div className="h-screen w-full">
				<LandPageHeader />
				<LandPageMain />
				<Footer />
			</div>
		</>
	);
}
