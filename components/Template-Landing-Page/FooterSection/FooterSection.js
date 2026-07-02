"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 via-violet-500/20 to-pink-500/20 blur-3xl opacity-40"></div>

      {/* Glassmorphism Container */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-full mx-auto px-6 py-12 rounded-t-3xl bg-slate-950/80 backdrop-blur-xl border border-slate-800 shadow-[0_-10px_40px_rgba(2,6,23,0.35)]"
      >
        {/* Content */}
        <div className="grid md:grid-cols-3 gap-10 items-center text-center md:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-4xl font-bold text-slate-100 underline underline-offset-4 decoration-sky-400">rexivo.id</h2>
            <p className="text-slate-400 mt-2">
              Membawa inovasi digital dengan desain modern dan fungsional.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col space-y-2 text-slate-400">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              About Us
            </a>
            <a
              href="#Services"
              className="hover:text-white transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#Projects"
              className="hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Social Media */}
          <div className="flex justify-center md:justify-end space-x-4">
            {[
              { icon: Facebook, link: "#" },
              { icon: Twitter, link: "#" },
              { icon: Linkedin, link: "#" },
              { icon: Instagram, link: "https://instagram.com/rexivo.id" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors duration-300"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} rexivo.id. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ by Kosan Studios</p>
        </div>
      </motion.div>
    </footer>
  );
}
