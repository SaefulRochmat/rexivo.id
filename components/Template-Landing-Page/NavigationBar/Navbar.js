'use client';

import useToggle from "@/hooks/forComponentsTemplate/useToggleNavbar";
import { Menu, X } from 'lucide-react';
import { motion } from "framer-motion";

export default function Navbar() {
    const {open: mobileNavOpen, setOpen: setMobileNavOpen} = useToggle(false);
    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white border-b border-slate-200/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600 text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
              R
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent underline underline-offset-4 decoration-yellow-300">rexivo.id</div>
              <div className="text-xs text-slate-500 font-medium">web for students</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a className="text-slate-600 hover:text-sky-600 transition-colors duration-200 font-medium relative group" href="#services">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a className="text-slate-600 hover:text-sky-600 transition-colors duration-200 font-medium relative group" href="#projects">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a className="text-slate-600 hover:text-sky-600 transition-colors duration-200 font-medium relative group" href="#pricing">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a className="text-slate-600 hover:text-sky-600 transition-colors duration-200 font-medium relative group" href="#contact">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-800 transition-all duration-200 font-medium bg-white/50 backdrop-blur">Login</button>
            <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">Get Started</button>
          </div>

          <button className="md:hidden p-2.5 rounded-lg hover:bg-slate-100 transition-colors duration-200" onClick={() => setMobileNavOpen((v) => !v)} aria-label="menu">
            {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileNavOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              <a href="#services" className="text-slate-600 hover:text-sky-600 transition-colors duration-200 font-medium" onClick={() => setMobileNavOpen(false)}>Services</a>
              <a href="#projects" className="text-slate-600 hover:text-sky-600 transition-colors duration-200 font-medium" onClick={() => setMobileNavOpen(false)}>Projects</a>
              <a href="#pricing" className="text-slate-600 hover:text-sky-600 transition-colors duration-200 font-medium" onClick={() => setMobileNavOpen(false)}>Pricing</a>
              <a href="#contact" className="text-slate-600 hover:text-sky-600 transition-colors duration-200 font-medium" onClick={() => setMobileNavOpen(false)}>Contact</a>
              <div className="flex gap-5 mt-3 pt-3 border-t border-slate-200">
                <button className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-400 text-slate-600 font-medium bg-white">Login</button>
                <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110">Get Started</button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
    );
}