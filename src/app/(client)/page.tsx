import { Hero } from "@/components/Hero/Hero";
import { NewsLanding } from "@/components/NewsLanding/NewsLanding";
import { AboutUsLanding } from "@/components/AboutUsLanding/AboutUsLanding";
import { BecomeDonor } from "@/components/BecomeDonor";

export default function Home() {
  return (
    <>
      <Hero />
      <NewsLanding />
      <AboutUsLanding />
      <BecomeDonor />
    </>
  );
}
