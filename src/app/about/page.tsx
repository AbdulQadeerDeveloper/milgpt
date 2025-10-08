import { Footer } from "@/components/Footer";
import AboutHero from "@/components/home/AboutHero";
import BookingSection from "@/components/home/BookingSection";
import CommitmentSection from "@/components/home/CommitmentSection";
import Grid from "@/components/home/Grid";
import WorkingProcess from "@/components/home/OurWorking";
import WhoWeAre from "@/components/home/WhoWeAre";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <WhoWeAre />
      <WorkingProcess />
      <CommitmentSection />
      <BookingSection />
      <Grid />
      <Footer />
    </>
  );
}
