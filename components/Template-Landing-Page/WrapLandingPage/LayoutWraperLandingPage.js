import CarouselHero from "../CarouselHero/CarouselHero";
import { GridBeams } from "@/components/magicui/grid-beams";
import Navbar from "../NavigationBar/Navbar";

export default function BackgroundGridBeams() {
    return (
    <div className="relative w-full h-screen overflow-hidden rounded-lg border">
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
        <div className="flex min-h-screen  items-center justify-center">
            <CarouselHero />
        </div>
      </GridBeams>
    </div>
    );
}