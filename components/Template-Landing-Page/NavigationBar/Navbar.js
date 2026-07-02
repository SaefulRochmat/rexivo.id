"use client";

import useToggle from "@/hooks/forComponentsTemplate/useToggleNavbar";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
	const { open: mobileNavOpen, setOpen: setMobileNavOpen } = useToggle(false);

	const navItems = [
		{ name: "Home", href: "#"},
		{ name: "Services", href: "#Services" },
		{ name: "Projects", href: "#Projects" },
		{ name: "Our Teams", href: "#OurTeams"},
		{ name: "Pricing", href: "#pricing" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/70 shadow-[0_8px_30px_rgba(2,6,23,0.45)]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<a href="#" className="flex items-center space-x-3 group">
						<div className="relative">
							<Image
								src="/logos/logo-rexivo.png"
								alt="Logo Rexivo"
								width={40}
								height={40}
								className="w-10 h-10 rounded-full object-cover"
							/>
							<div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
						</div>
						<div className="hidden sm:block">
							<h1 className="text-xl font-bold text-slate-100">rexivo.id</h1>
							<p className="text-xs text-slate-400 -mt-0.5">web for students</p>
						</div>
					</a>

					{/* Desktop Navigation */}
					<nav className="hidden md:block">
						<div className="flex items-center space-x-1 rounded-full px-2 py-1.5">
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
										className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full transition-all duration-200 relative group"
								>
									{item.name}
										<span className="absolute inset-x-4 -bottom-px h-px bg-slate-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
								</a>
							))}
						</div>
					</nav>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setMobileNavOpen((v) => !v)}
						className="md:hidden p-2 rounded-lg hover:bg-slate-800/80 transition-colors duration-200 text-slate-200"
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
						className="md:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800/70"
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
										className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-lg transition-all duration-200 font-medium"
									>
										{item.name}
									</motion.a>
								))}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
