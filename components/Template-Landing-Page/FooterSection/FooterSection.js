"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl opacity-50"></div>

      {/* Glassmorphism Container */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-full mx-auto px-6 py-12 rounded-t-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
      >
        {/* Content */}
        <div className="grid md:grid-cols-3 gap-10 items-center text-center md:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-4xl font-bold text-white underline underline-offset-4 decoration-yellow-300">rexivo.id</h2>
            <p className="text-gray-200 mt-2">
              Membawa inovasi digital dengan desain modern dan fungsional.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col space-y-2 text-gray-300">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Tentang Kami
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Layanan
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Proyek
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Kontak
            </a>
          </div>

          {/* Social Media */}
          <div className="flex justify-center md:justify-end space-x-4">
            {[
              { icon: Facebook, link: "#" },
              { icon: Twitter, link: "#" },
              { icon: Linkedin, link: "#" },
              { icon: Instagram, link: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
          <p>© {new Date().getFullYear()} rexivo.id. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ by Kosan Studios</p>
        </div>
      </motion.div>
    </footer>
  );
}
