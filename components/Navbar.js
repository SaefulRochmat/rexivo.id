"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="bg-[#60B5FF] text-white fixed w-full z-50 shadow-md">
			<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
				<h1 className="text-2xl font-bold underline underline-offset-3 decoration-yellow-300">
					rexivo.id
				</h1>
				<nav className="hidden md:flex space-x-6">
					<Link
						href="#"
						className="p-2 hover:bg-blue-600 hover:text-yellow-300 rounded-lg transition duration-300 hover:scale-110"
					>
						Home
					</Link>
					<Link
						href="#features"
						className="p-2 hover:bg-blue-600 hover:text-yellow-300 rounded-lg transition duration-300 hover:scale-110"
					>
						Product
					</Link>
					<Link
						href="#pricing"
						className="p-2 hover:bg-blue-600 hover:text-yellow-300 rounded-lg transition duration-300 hover:scale-110"
					>
						Harga
					</Link>
					<Link
						href="#contact"
						className="p-2 hover:bg-blue-600 hover:text-yellow-300 rounded-lg transition duration-300 hover:scale-110"
					>
						Kontak
					</Link>
				</nav>
				<button
					className="md:hidden cursor-pointer"
					onClick={() => setOpen(!open)}
				>
					{open ? (
						<X />
					) : (
						<Menu className="hover:text-yellow-300 rounded-lg transition duration-300 hover:scale-110" />
					)}
				</button>
			</div>
			{open && (
				<div className="md:hidden bg-primary text-dark text-center pb-4">
					<Link
						href="#"
						className="block py-2 hover:bg-blue-600 hover:text-yellow-300 transition duration-300 hover:scale-110 border-t border-yellow-300"
					>
						Home
					</Link>
					<Link
						href="#features"
						className="block py-2 hover:bg-blue-600 hover:text-yellow-300 rounded-lg transition duration-300 hover:scale-110"
					>
						Fitur
					</Link>
					<Link
						href="#pricing"
						className="block py-2 hover:bg-blue-600 hover:text-yellow-300 rounded-lg transition duration-300 hover:scale-110"
					>
						Harga
					</Link>
					<Link
						href="#contact"
						className="block py-2 hover:bg-blue-600 hover:text-yellow-300 rounded-lg transition duration-300 hover:scale-110"
					>
						Kontak
					</Link>
				</div>
			)}
		</header>
	);
};

export default Navbar;
