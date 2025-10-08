import { Footer } from "@/components/Footer";
import ContactHero from "@/components/home/ConatactHero";
import Contact from "@/components/home/ContactForm";
import Grid from "@/components/home/Grid";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <Contact />
      <Grid />
      <Footer />
    </>
  );
}
