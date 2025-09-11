"use client";
import Image from "next/image";
import useHeroSlider from "@/hooks/useHeroSlider";

const Hero = () => {
  const slider = [
    {
      title: (
        <>
          Selamat Datang <br/> di Website <span className="underline underline-offset-4 decoration-yellow-300">rexivo.id</span>
        </>
      ),
      subtitle: "Jasa Pembuatan Website Profesional",
      image:
        "https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: (
        <>
          <span className="underline underline-offset-4 decoration-yellow-300">rexivo.id</span> <br/> Solusi Website untuk Bisnis Anda
        </>
      ),
      subtitle:(
        <>
          Tingkatkan Kehadiran Online <br/> dengan Desain Modern dan Fungsionalitas Lengkap.
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: (
        <>
          Wujud Website Impian Anda <br/> Bersama <span className="underline underline-offset-4 decoration-yellow-300">rexivo.id</span>
        </>
      ),
      subtitle: "Cepat, Elegan, Responsif, dan Ramah di Kantong.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1470&auto=format&fit=crop",
    },
  ];

  // ✅ pake slider.length bukan images
  const { currentIndex, setCurrentIndex } = useHeroSlider(slider, 5000);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background slider with animation */}
      <div className="absolute inset-0">
        {slider.map((item, index) => (
          <Image
            key={index}
            src={item.image}
            alt={`Hero Background ${index}`}
            fill
            className={`absolute object-cover transition-all duration-1000 ease-in-out transform
              ${
                currentIndex === index
                  ? "opacity-100 scale-100 z-20"
                  : "opacity-0 scale-105 z-10"
              }
            `}
          />
        ))}
        <div className="absolute inset-0 bg-black/70 bg-opacity-50 z-30" />
      </div>

      {/* Content dynamic with transition */}
      <div className="relative z-40 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        {slider.map((item, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-700 ease-in-out transform
              ${currentIndex === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 pointer-events-none"}
            `}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
              {item.title}
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-center drop-shadow-md">
              {item.subtitle}
            </p>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Konsultasi Gratis
            </a>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 w-full flex justify-center z-50 gap-2">
        {slider.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
