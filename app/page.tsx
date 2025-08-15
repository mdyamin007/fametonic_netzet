import Hero from "@/components/Hero";
import HeroImage from "@/components/HeroImage";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <HeroImage />
    </>
  );
}
