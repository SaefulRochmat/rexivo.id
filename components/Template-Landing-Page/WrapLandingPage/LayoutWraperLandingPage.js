import CarouselHero from "../CarouselHero/CarouselHero";
import { GridBeams } from "@/components/magicui/grid-beams";
import Navbar from "../NavigationBar/Navbar";
import MarqueeSection from "../TechMarquee/MarqueeSection";
import PromotionSection from "../PromotionSection/PromotionSection";
import ProjectGallerySection from "../ProjectGallery/ProjectGallerySection";
import { TestimonialSection } from "../TestiMonial/TestiMonialSection";
import TeamSection from "../OurTeams/OurTeams";
import PricingSection from "../PricingSection/PricingSection";
import ContactSection from "../ContactSection/ContactSection";
import Footer from "../FooterSection/FooterSection";
import WAWidget from "../WhatsappChatWidget/WhatsappChatWidget"

export default function WraperComponents() {
    return (
      <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-slate-100">
        <GridBeams
          gridSize={100}
          gridColor="rgba(148, 163, 184, 0.16)"
          rayCount={14}
          rayOpacity={0.45}
          raySpeed={1.2}
          rayLength="80vh"
          gridFadeStart={5}
          gridFadeEnd={90}
          className="h-full w-full"
        >

        {/*NAVIGATION BAR */}
        <Navbar />

        {/*HEROOOO SLIDEEERRR */}
        <CarouselHero />

        {/*Technology Section Marquee */}
        <MarqueeSection />

        {/* Device Mockup Section */}
        <PromotionSection />

        {/*Project Gallery Section */}
        <ProjectGallerySection />

        {/*Testimonial Section */}
        <TestimonialSection />

        {/*Our Teams Section */}
        <TeamSection />

        {/*Pricing Section */}
        <PricingSection />

        {/*Contact Section */}
        <ContactSection />

        {/*Footer Section*/}
        <Footer />

        {/*Whatsapp Widget */}
        <WAWidget />
        </GridBeams>
      </div>
    );
}