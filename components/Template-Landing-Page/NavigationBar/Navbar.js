'use client';

import useToggle from "@/hooks/forComponentsTemplate/useToggleNavbar";
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const {open: mobileNavOpen, setOpen: setMobileNavOpen} = useToggle(false);
    
    const navItems = [
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                                <span className="text-white font-bold text-lg">R</span>
                            </div>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl font-bold text-gray-900">rexivo.id</h1>
                            <p className="text-xs text-gray-500 -mt-0.5">web for students</p>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <div className="flex items-center space-x-1 bg-gray-50/80 rounded-full px-2 py-1.5 backdrop-blur-sm">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-white rounded-full transition-all duration-200 relative group"
                                >
                                    {item.name}
                                    <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        <button className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
                            Login
                        </button>
                        <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2">
                            <span>Get Started</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileNavOpen((v) => !v)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait">
                            {mobileNavOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-5 h-5" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-5 h-5" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileNavOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100/50"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {/* Mobile Nav Items */}
                            <div className="space-y-2">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.2 }}
                                        onClick={() => setMobileNavOpen(false)}
                                        className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Mobile CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.2 }}
                                className="pt-4 border-t border-gray-100 space-y-3"
                            >
                                <button
                                    onClick={() => setMobileNavOpen(false)}
                                    className="w-full text-center px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium border border-gray-200"
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => setMobileNavOpen(false)}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-4 py-3 rounded-lg transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
                                >
                                    <span>Get Started</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}