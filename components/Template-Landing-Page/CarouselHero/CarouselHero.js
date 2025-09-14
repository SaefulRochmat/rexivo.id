'use client';

import avatar1 from "@/public/Images/avatar1.png";
import avatar2 from "@/public/Images/avatar2.png";
import avatar3 from "@/public/Images/avatar3.png";
import LaptopSatu from "@/public/Images/LaptopSatu.png";
import LaptopDua from "@/public/Images/LaptopDua.png";
import LaptopTiga from "@/public/Images/LaptopTiga.png";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useCarousel } from "@/hooks/forComponentsTemplate/useCarousel";
import Image from "next/image";

const SLIDE_DURATION = 7000; // 7 detik

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
  exit: { opacity: 0 },
};

const variants = {
  title: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    exit: { opacity: 0, x: -100 },
  },
  subtitle: {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeInOut" } },
    exit: { opacity: 0, x: -80 },
  },
  cta: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
    exit: { opacity: 0, y: -40 },
  },
  leftCard: {
    initial: { opacity: 0, x: -60, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    exit: { opacity: 0, x: 60, scale: 0.95 },
  },
  rightCard: {
    initial: { opacity: 0, x: 60, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    exit: { opacity: 0, x: -60, scale: 0.95 },
  },
  bottomCard: {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    exit: { opacity: 0, y: -50, scale: 0.95 },
  },
};

const heroSlides = [
  {
    title: 'Website Keren untuk Projectmu',
    subtitle: 'Mudah, Cepat, dan Ramah di Kantong — Cocok untuk pelajar & mahasiswa',
    cta: 'Pesan Sekarang',
    img: LaptopSatu,
    cardData: {
      leftCard: { title: 'Start', subtitle: 'Only for students', gradient: 'from-sky-100 via-blue-50 to-indigo-100' },
      rightCard: { title: 'Fast', subtitle: 'Deployment 1-3 days', bg: 'bg-white/90' },
      bottomCard: { title: 'Demo:', description: 'Simple, clean UI tailored for student projects and assignments.' }
    }
  },
  {
    title: 'Portfolio Digital untuk Tugas & Skripsi',
    subtitle: 'Desain responsif, performa cepat, dan dukungan penuh',
    cta: 'Lihat Paket',
    img: LaptopDua,
    cardData: {
      leftCard: { title: 'Portfolio', subtitle: 'Showcase your work', gradient: 'from-purple-100 via-pink-50 to-rose-100' },
      rightCard: { title: 'Responsive', subtitle: 'Mobile & Desktop', bg: 'bg-gradient-to-br from-white/90 to-purple-50/80' },
      bottomCard: { title: 'Features:', description: 'Modern design with smooth animations and optimized performance.' }
    }
  },
  {
    title: 'Landing Page yang Mengonversi',
    subtitle: 'Optimized for readability, dan mudah dikustom',
    cta: 'Konsultasi Gratis',
    img: LaptopTiga,
    cardData: {
      leftCard: { title: 'Convert', subtitle: 'High conversion rate', gradient: 'from-green-100 via-emerald-50 to-teal-100' },
      rightCard: { title: 'SEO Ready', subtitle: 'Optimized & Fast', bg: 'bg-gradient-to-br from-white/90 to-green-50/80' },
      bottomCard: { title: 'Optimized:', description: 'Built with performance and search engine optimization in mind.' }
    }
  },
];

export default function CarouselHero() {
  const { index: heroIndex, jump: jumpHero } = useCarousel(heroSlides.length, SLIDE_DURATION);
  const slide = heroSlides[heroIndex];

  return (
    <div className="px-1 py-2">
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
            <div className="h-32 sm:h-36 lg:h-44 flex items-start relative overflow-hidden">
              <motion.h1
                variants={variants.title}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-slate-100 absolute top-0 left-0"
              >
                {slide.title}
              </motion.h1>
            </div>

            <div className="h-16 sm:h-20 flex items-start relative overflow-hidden">
              <motion.p
                variants={variants.subtitle}
                className="text-lg sm:text-xl text-yellow-300 leading-relaxed max-w-lg absolute top-0 left-0"
              >
                {slide.subtitle}
              </motion.p>
            </div>

            <div className="h-16 flex items-start relative">
              <motion.div
                variants={variants.cta}
                className="flex flex-col sm:flex-row gap-4 items-start sm:items-center absolute top-0 left-0"
              >
                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                  {slide.cta}
                </button>
                <a href="#pricing" className="flex items-center gap-2 text-slate-100 hover:text-sky-600 transition-colors duration-200 font-medium group whitespace-nowrap">
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
                <Image src={avatar1} width={500} height={500} quality={100} alt="user" className="w-12 h-12 object-cover rounded-full border-2 border-white" />
                <Image src={avatar2} width={500} height={500} quality={100} alt="user" className="w-12 h-12 object-cover rounded-full border-2 border-white" />
                <Image src={avatar3} width={500} height={500} quality={100} alt="user" className="w-12 h-12 object-cover rounded-full border-2 border-white" />
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
            src={slide.img} // ambil dari heroSlides
            alt={slide.title}
            width={1600}
            height={1000}
            quality={100}
            className="object-contain w-full h-full"
          />
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
</AnimatePresence>

        </div>

        {/* Hero Indicators dengan Progress Bar */}
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
