import Challenge from "@/components/home/Challenge";
import Faqs from "@/components/home/Faqs";
import Features from "@/components/home/Features";
import Grid from "@/components/home/Grid";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import FeaturesSentiment from "@/components/home/FeaturesSentment";
import { HomeFaqsData } from "@/constants/Data";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesSentiment />
      <Challenge />

      <Pricing />
      <Faqs faqs={HomeFaqsData} />
      <Grid />
    </>
  );
}
