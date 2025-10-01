import AboutHero from "@/components/home/AboutHero";
import BookingSection from "@/components/home/BookingSection";
import CommitmentSection from "@/components/home/CommitmentSection";
import Grid from "@/components/home/Grid";
import WorkingProcess from "@/components/home/OurWorking";
import Pricing from "@/components/home/Pricing";

export default function About() {
  return (
    <>
      <AboutHero />
      <CommitmentSection />
      <WorkingProcess />
      <Pricing />
      <BookingSection />
      <Grid />
    </>
  );
}
