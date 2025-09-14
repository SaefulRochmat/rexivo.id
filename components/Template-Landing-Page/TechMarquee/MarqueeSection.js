"use client";

import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

import Laravel from "../../../public/logos/Laravel-Logo.png";
import Nextjs from "../../../public/logos/NextJS-logo.png";
import ReactLogo from "../../../public/logos/React-logo.svg";  
import Tailwindcss from "../../../public/logos/TailwindCSS-logo.svg";
import Nodejs from "../../../public/logos/NodeJS-logo.svg";
import Html from "../../../public/logos/HTML5-logo.png";
import Css from "../../../public/logos/CSS-logo.png";
import Javascript from "../../../public/logos/JavaScript-logo.png";

const technologies = [
  { name: "Laravel", img: Laravel },
  { name: "Next.js", img: Nextjs },
  { name: "React", img: ReactLogo },
  { name: "HTML", img: Html },
  { name: "CSS", img: Css },
  { name: "JavaScript", img: Javascript },
  { name: "TailwindCSS", img: Tailwindcss },
  { name: "Node.js", img: Nodejs },
];

const TechCard = ({ img, name }) => {
  return (
    <div className="flex flex-col items-center justify-center 
      w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
      p-2 sm:p-3 md:p-4 
      rounded-xl border bg-white/45 dark:bg-gray-900 
      shadow-md transform hover:scale-105 transition-transform m-2 sm:m-3">
      <Image
        src={img}
        width={56}
        height={56}
        alt={name}
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
      />
      <p className="mt-1 text-xs sm:text-sm font-medium text-gray-100 dark:text-gray-100 text-center">
        {name}
      </p>
    </div>
  );
};

export default function MarqueeSection() {
  const firstRow = technologies.slice(0, Math.ceil(technologies.length / 2));

  return (
    <section className="relative flex w-full flex-col items-center rounded-lg justify-center overflow-hidden py-8 sm:py-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-slate-100 text-center">
        Teknologi yang kami gunakan
      </h2>

      <Marquee pauseOnHover className="[--duration:20s]">
        <div className="flex items-center">
          {firstRow.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 sm:w-1/4 bg-gradient-to-r from-white/25 dark:from-gray-900" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 sm:w-1/4 bg-gradient-to-l from-white/25 dark:from-gray-900" />
    </section>
  );
}
