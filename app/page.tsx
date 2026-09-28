import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import SkillsPreview from "../components/SkillsPreview";
import JourneyPreview from "../components/JourneyPreview";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutPreview />
        <SkillsPreview />
        <JourneyPreview />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}