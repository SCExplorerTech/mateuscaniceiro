import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Shows from "@/components/Shows";
import Videos from "@/components/Videos";
import Gallery from "@/components/Gallery";
import CorporateCTA from "@/components/CorporateCTA";
import SocialStrip from "@/components/SocialStrip";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <FadeIn><About /></FadeIn>
      <FadeIn delay={100}><Shows /></FadeIn>
      <FadeIn><Videos /></FadeIn>
      <FadeIn><Gallery /></FadeIn>
      <FadeIn><CorporateCTA /></FadeIn>
      <FadeIn><SocialStrip /></FadeIn>
      <FadeIn><Contact /></FadeIn>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <CookieBanner />
    </>
  );
}
