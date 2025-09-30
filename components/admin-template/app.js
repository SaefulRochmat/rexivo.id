"use client";

import { useEffect, useState, useRef } from "react";
import NavLink from "./nav-link";
import Link from "next/link";
import { Menu, X } from "lucide-react";


function Burger({ onClick, expanded = false }) {
	return (
		<button
			aria-label="Toggle sidebar"
			aria-expanded={expanded}
			aria-controls="admin-sidebar"
			title={expanded ? "Close sidebar" : "Open sidebar"}
			className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
			onClick={onClick}
		>
			<Menu />
		</button>
	);
}

function CloseBtn({ onClick }) {
	return (
		<button
			aria-label="Close sidebar"
			className="absolute right-3 top-3 rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 md:hidden"
			onClick={onClick}
		>
			<X />
		</button>
	);
}

function Sidebar({ mobileOpen, setMobileOpen }) {
	useEffect(() => {
		const onEsc = (e) => {
			if (e.key === "Escape") setMobileOpen(false);
		};
		if (mobileOpen && typeof window !== "undefined" && typeof document !== "undefined") {
			document.addEventListener("keydown", onEsc);
			return () => document.removeEventListener("keydown", onEsc);
		}
	}, [mobileOpen, setMobileOpen]);

	return (
		<>
			{/* Backdrop for mobile */}
			<div
				className={`fixed inset-0 z-40 bg-black/30 transition-opacity md:hidden ${mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
				onClick={() => setMobileOpen(false)}
			/>

			{/* Sidebar panel */}
			<aside
				id="admin-sidebar"
				className={`fixed inset-y-0 left-0 z-50 w-72 transform border-r bg-white shadow-sm transition-transform duration-200 will-change-transform ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
			>
				<div className="relative flex h-full flex-col">
					<div className="flex items-center gap-2 border-b py-4">
						<span className="ms-6 text-lg font-semibold">Admin</span>
						<CloseBtn onClick={() => setMobileOpen(false)} />
					</div>

					<nav className="flex-1 space-y-1 overflow-y-auto p-3">
						<NavLink href="/dashboard">Dashboard</NavLink>
						<NavLink href="#">Orders</NavLink>
						<NavLink href="#">Products</NavLink>
						<NavLink href="#">Customers</NavLink>
						<NavLink href="#">Reports</NavLink>
						<NavLink href="#">Settings</NavLink>
					</nav>
				</div>
			</aside>
		</>
	);
}

function Topbar({ onOpenSidebar, title, expanded }) {
	const [openMenu, setOpenMenu] = useState(false);
	const btnRef = useRef(null);
	const menuRef = useRef(null);

	useEffect(() => {
		function onDocClick(e) {
			if (!menuRef.current || !btnRef.current) return;
			if (!menuRef.current.contains(e.target) && !btnRef.current.contains(e.target)) {
				setOpenMenu(false);
			}
		}
		function onEsc(e) {
			if (e.key === "Escape") setOpenMenu(false);
		}
		document.addEventListener("mousedown", onDocClick);
		document.addEventListener("keydown", onEsc);
		return () => {
			document.removeEventListener("mousedown", onDocClick);
			document.removeEventListener("keydown", onEsc);
		};
	}, []);

	return (
		<header className="relative z-[10] border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
			<div className="flex h-14 items-center gap-3 px-4">
				<Burger onClick={onOpenSidebar} expanded={expanded} />
				<div className="ml-auto relative">
					<button
						ref={btnRef}
						onClick={() => setOpenMenu((v) => !v)}
						aria-haspopup="menu"
						aria-expanded={openMenu}
						className="flex items-center gap-2 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
					>
						<div className="h-8 w-8 overflow-hidden rounded-full bg-gray-200" />
						<span className="italic font-medium text-sm hidden sm:inline">Hi, Jhon Doe</span>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-gray-500"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.939l3.71-3.71a.75.75 0 1 1 1.06 1.061l-4.24 4.24a.75.75 0 0 1-1.06 0L5.25 8.29a.75.75 0 0 1-.02-1.06Z" clipRule="evenodd"/></svg>
					</button>

					{/* Dropdown */}
					<div
						ref={menuRef}
						className={`absolute right-0 mt-2 w-50 overflow-hidden rounded-md border bg-white shadow-lg transition-opacity ${openMenu ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
						role="menu"
					>
						<a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" role="menuitem">Profile</a>
						<a href="/dashboard/settings" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" role="menuitem">Settings</a>
						<hr className="my-1" />
						<a href="#" className="block px-3 py-2 text-sm text-red-600 hover:bg-red-50" role="menuitem">Logout</a>
					</div>
				</div>
			</div>
		</header>
	);
}

export default function AdminTemplate({ children, title = "Dashboard" }) {
	const [mobileOpen, setMobileOpen] = useState(false);

	// Open by default on desktop (md and up)
	useEffect(() => {
		if (typeof window !== "undefined") {
			const mq = window.matchMedia("(min-width: 768px)");
			setMobileOpen(mq.matches);
		}
	}, []);

	return (
		<div className="min-h-screen bg-gray-50">
			<Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

			<main className={`${mobileOpen ? "md:pl-72" : "md:pl-0"} transition-[padding] duration-200`}>
				<Topbar title={title} onOpenSidebar={() => setMobileOpen((v) => !v)} expanded={mobileOpen} />

				<div className="p-3">
					{children}
				</div>
			</main>
		</div>
	);
}
