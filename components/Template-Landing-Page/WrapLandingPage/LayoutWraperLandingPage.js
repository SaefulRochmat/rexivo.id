import CarouselHero from "../CarouselHero/CarouselHero";
import { GridBeams } from "@/components/magicui/grid-beams";
import Navbar from "../NavigationBar/Navbar";
import MarqueeSection from "../TechMarquee/MarqueeSection";

export default function BackgroundGridBeams() {
    return (
    <div className="relative w-full overflow-hidden">
      <GridBeams
        gridSize={100}
        gridColor="rgba(255, 255, 255, 0.2)"
        rayCount={20}
        rayOpacity={0.55}
        raySpeed={1.5}
        rayLength="80vh"
        gridFadeStart={5}
        gridFadeEnd={90}
        className="h-full w-full"
      >

      {/*NAVIGATION BAR */}
      <Navbar />

      {/*HEROOOO SLIDEEERRR */}
      <div className="px-2 py-1 mb-12">
        <div className="h-screen w-full items-center justify-center">
            <CarouselHero />
        </div>
      </div>

      {/*Technology Section Marquee */}
      <div className="mb-12 py-1 px-2">
        <MarqueeSection />
      </div>


      </GridBeams>
    </div>
    );
}