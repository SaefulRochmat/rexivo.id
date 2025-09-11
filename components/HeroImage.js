import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Background"
          fill
          className="z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black/70 bg-opacity-50 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          Website Impianmu,<br />Kami Buatkan
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl drop-shadow-md">
          Cepat, Elegan, Responsif, dan Ramah di Kantong.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Konsultasi Gratis
        </a>
      </div>
    </section>
  );
};

export default Hero;
