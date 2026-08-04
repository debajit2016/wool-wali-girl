import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Offerings from "@/components/home/Offerings";
import HowToOrder from "@/components/home/HowToOrder";
import Testimonials from "@/components/home/Testimonials";
import LatestCreations from "@/components/home/LatestCreations";
import OurStory from "@/components/home/OurStory";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Offerings />
      <HowToOrder />
      <Testimonials />
      <LatestCreations />
      <OurStory />
      <CTABanner />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
