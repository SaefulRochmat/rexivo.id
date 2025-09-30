'use client';

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import avatar1 from "@/public/Images/avatar1.png";
import avatar2 from "@/public/Images/avatar2.png";
import avatar3 from "@/public/Images/avatar3.png";
import { useCarousel } from "@/hooks/forComponentsTemplate/useCarousel";
import { containerVariants, variants } from "@/constants/forTemplate2/CarouselVariants";
import { heroSlides } from "@/constants/forTemplate2/HeroSlideDatas";

const SLIDE_DURATION = 7000; // 7 detik

export default function CarouselHero() {
  const { index: heroIndex, jump: jumpHero } = useCarousel(heroSlides.length, SLIDE_DURATION);
  const slide = heroSlides[heroIndex];

  return (
    <div className="px-1 py-2 pt-10">
      <section className="rounded-lg pt-16 pb-16 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-yellow-50/30"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
          {/* TEXT SIDE */}
          <motion.div
            key={`text-${heroIndex}`}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-8"
          >
            {/* Title */}
            <div className="h-32 sm:h-36 lg:h-44 flex items-start relative overflow-hidden">
              <motion.h1
                variants={variants.title}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-slate-100 absolute top-0 left-0"
              >
                {slide.title}
              </motion.h1>
            </div>

            {/* Subtitle */}
            <div className="h-16 sm:h-20 flex items-start relative overflow-hidden">
              <motion.p
                variants={variants.subtitle}
                className="text-lg sm:text-xl text-yellow-300 leading-relaxed max-w-lg absolute top-0 left-0"
              >
                {slide.subtitle}
              </motion.p>
            </div>

            {/* CTA */}
            <div className="h-16 flex items-start relative">
              <motion.div
                variants={variants.cta}
                className="flex flex-col sm:flex-row gap-4 items-start sm:items-center absolute top-0 left-0"
              >
                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                  {slide.cta}
                </button>
                <a
                  href="#pricing"
                  className="flex items-center gap-2 text-slate-100 hover:text-sky-600 transition-colors duration-200 font-medium group whitespace-nowrap"
                >
                  Lihat Paket
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </motion.div>
            </div>

            {/* Trusted Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }}
              exit={{ opacity: 0, y: 20 }}
              className="pt-6 text-sm text-slate-600 flex items-center gap-4"
            >
              <span className="font-semibold text-slate-100">Trusted by</span>
              <div className="flex -space-x-2">
                {[avatar1, avatar2, avatar3].map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    alt={`Pengguna ${idx + 1} yang mempercayai Rexivo.id`}
                    title={`Pengguna ${idx + 1}`}
                    width={48}
                    height={48}
                    quality={60}
                    loading="lazy"
                    className="w-12 h-12 object-cover rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-slate-100">10.000+ users</span>
            </motion.div>
          </motion.div>

          {/* CARD SIDE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`cards-${heroIndex}`}
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white/20 backdrop-blur-sm p-1"
            >
              <div className="flex items-center justify-center">
                <motion.div
                  variants={variants.rightCard}
                  className="w-full max-w-3xl h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] flex items-center justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <Image
                      src={slide.img}
                      alt={`${slide.title} - ${slide.subtitle}`}
                      title={slide.title}
                      width={500}
                      height={500}
                      quality={75}
                      priority // penting buat LCP pertama
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain w-full h-full"
                    />

                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="mt-10 flex justify-center gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => jumpHero(idx)}
              className="relative w-12 sm:w-14 md:w-16 lg:w-18 h-2 rounded-full bg-slate-300 overflow-hidden"
            >
              {idx === heroIndex && (
                <motion.div
                  key={heroIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  className="absolute left-0 top-0 h-full bg-yellow-400"
                />
              )}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
