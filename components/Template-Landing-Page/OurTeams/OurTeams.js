"use client";

import { useState } from "react";
import Image from "next/image";
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    image: "/images/team1.jpg",
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: "/images/team2.jpg",
  },
  {
    name: "Michael Lee",
    role: "Backend Developer",
    image: "/images/team3.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Project Manager",
    image: "/images/team4.jpg",
  },
  {
    name: "David Kim",
    role: "Mobile Developer",
    image: "/images/team5.jpg",
  },
];

const TeamCard = ({ member }) => {
  return (
    <ScratchToReveal
      width={280}
      height={320}
      minScratchPercentage={65}
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/20 backdrop-blur-lg",
        "bg-white/10 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
      )}
      gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
    >
      <div className="flex flex-col items-center justify-center h-full w-full p-4">
        <Image
          src={member.image}
          alt={member.name}
          width={120}
          height={120}
          className="rounded-full border-2 border-white/40 object-cover"
        />
        <h3 className="mt-4 text-lg font-semibold text-white drop-shadow">
          {member.name}
        </h3>
        <p className="text-sm text-slate-200/90">{member.role}</p>
      </div>
    </ScratchToReveal>
  );
};

export function TeamSection() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));

  return (
    <section className="w-full py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-black relative overflow-hidden">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Kenali <span className="text-purple-400">Tim Kami</span>
        </h2>
        <p className="mt-3 text-slate-300 max-w-xl mx-auto">
          Gosok kartu di bawah untuk mengenal lebih dekat dengan anggota tim
          luar biasa kami!
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative flex items-center justify-center">
        {/* Tombol Prev */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-lg text-white"
        >
          ◀
        </button>

        {/* Slide */}
        <div className="overflow-hidden w-[300px] sm:w-[350px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {teamMembers.map((member, idx) => (
              <div key={idx} className="flex-shrink-0 w-[300px] sm:w-[350px]">
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* Tombol Next */}
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-lg text-white"
        >
          ▶
        </button>
      </div>

      {/* Indikator bulat */}
      <div className="flex justify-center mt-6 gap-2">
        {teamMembers.map((_, idx) => (
          <span
            key={idx}
            className={cn(
              "h-3 w-3 rounded-full transition-all duration-300",
              current === idx ? "bg-purple-400 scale-110" : "bg-gray-400/50"
            )}
          />
        ))}
      </div>

      {/* efek background animasi */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(167,139,250,0.2),transparent_70%)]"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_70%,rgba(253,204,146,0.15),transparent_70%)]"></div>
    </section>
  );
}
