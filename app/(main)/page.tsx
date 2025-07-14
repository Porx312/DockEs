import { PricingTable } from "@clerk/nextjs";
import Feature from "./components/Feature";
import HeroSection from "./components/HeroSection";
import ShowCaseSection from "./components/ShowCaseSection";
import Pricing from "./components/pricing";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Feature />
      <ShowCaseSection />
    <Pricing/>
    </div>
  );
}
