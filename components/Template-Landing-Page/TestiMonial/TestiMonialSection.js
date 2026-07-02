"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import { useTestimonials } from "@/hooks/forComponentsTemplate/useTestiMonials";

const TestimonialCard = ({ name, description, avatar, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-lg p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-slate-900/80 shadow-md border border-slate-800",
        "dark:bg-slate-900/80 dark:backdrop-blur-md dark:border-slate-800"
      )}
    >
      <div className="flex flex-row items-start gap-3">
        <div className="flex-shrink-0">
          <Image
            src={avatar}
            alt={`Foto profil ${name} - Testimoni klien Rexivo.id`}
            title={`Testimoni dari ${name}`}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-base font-medium text-slate-100">
            <span>{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-sky-400">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-slate-400">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function TestimonialSection({ className }) {
  const testimonials = useTestimonials();

  return (
    <div className="px-1 py-2">
      <section className="w-full py-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl border border-slate-800/80 shadow-[0_0_60px_rgba(2,6,23,0.25)]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE: Text */}
          <div className="space-y-6 px-4 text-center md:text-start">
            <h2 className="text-3xl md:text-6xl font-bold text-slate-100">
              Apa kata mereka?
            </h2>
            <p className="text-lg text-slate-400">
              Testimoni dari pengguna yang sudah merasakan manfaatnya.
              Semua feedback mereka membantu kami untuk terus berkembang.
            </p>
            <button className="group relative px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-slate-700/40 transform hover:-translate-y-2 hover:scale-110 transition-all duration-300 overflow-hidden border border-slate-700">
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
