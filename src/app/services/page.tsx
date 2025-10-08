import { Footer } from "@/components/Footer";
import Challenge from "@/components/home/Challenge";
import ContactSection from "@/components/home/ContactSection";
import Grid from "@/components/home/Grid";
import ScheduleConsultationSection from "@/components/home/ScheduleConsultationSection";
import ServicesPage from "@/components/home/Services";
import ServicesHero from "@/components/home/ServicesHero";
import Navbar from "@/components/Navbar";

export default function Services() {
  return (
    <>
      <Navbar />
      <ServicesHero />
      <ServicesPage />
      <ScheduleConsultationSection />
      <Challenge />
      <ContactSection />
      <Grid />
      <Footer />
    </>
  );
}
