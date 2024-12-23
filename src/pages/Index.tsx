import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Testimonials />
      <Gallery />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;