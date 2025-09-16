"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

let testimonials = [
  {
    name: "John Doe",
    description: "Magic UI sangat membantu project saya jadi lebih cepat 🚀",
    time: "2 hari lalu",
    avatar: "/images/avatar1.png",
  },
  {
    name: "Jane Smith",
    description: "UI komponenya keren banget, gampang dipake 👍",
    time: "5 hari lalu",
    avatar: "/images/avatar2.png",
  },
  {
    name: "Michael Lee",
    description: "Sekarang kerjaan desain front-end jadi lebih efisien 🔥",
    time: "1 minggu lalu",
    avatar: "/images/avatar3.png",
  },
];

testimonials = Array.from({ length: 100 }, () => testimonials).flat();

const TestimonialCard = ({ name, description, avatar, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-lg p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white/45 shadow-md border-t-2 border-yellow-300/40",
        "dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-start gap-3">
        <div className="flex-shrink-0">
          <Image
            src={avatar}
            alt={name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-base font-medium text-slate-100">
            <span>{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-yellow-300">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-slate-100">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function TestimonialSection({ className }) {
  return (
   <div className="px-1 py-2">
    <section className="w-full py-4 bg-gradient-to-br from-slate-500/80 via-transparent to-slate-500/80 rounded-lg">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE: Text */}
        <div className="space-y-6 px-4 text-center md:text-start">
          <h2 className="text-3xl md:text-6xl font-bold text-slate-100">
            Apa kata mereka?
          </h2>
          <p className="text-lg text-slate-100">
            Testimoni dari pengguna yang sudah merasakan manfaatnya.
            Semua feedback mereka membantu kami untuk terus berkembang.
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 hover:scale-110 transition-all duration-300 overflow-hidden">
            Lihat Semua
          </button>
        </div>

        {/* RIGHT SIDE: Animated List */}
        <div
          className={cn(
            "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
            className
          )}
        >
          <AnimatedList>
            {testimonials.map((item, idx) => (
              <TestimonialCard {...item} key={idx} />
            ))}
          </AnimatedList>

          <div className="pointer-events-none absolute inset-x-0 bg-gradient-to-t from-background"></div>
        </div>
      </div>
    </section>
   </div>
  );
}
