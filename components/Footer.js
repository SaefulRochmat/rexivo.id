const Footer = () => {
	return (
		<footer className="bg-gradient-to-r bg-orange-400 text-white py-8 shadow-lg">
			<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
				<div className="flex flex-col items-center md:items-start">
					<span className="text-2xl font-bold tracking-tight mb-2">
						rexivo.id
					</span>
					<p className="text-sm opacity-80">
						© 2024 rexivo.id. All rights reserved.
					</p>
				</div>
				<div className="flex flex-col md:flex-row gap-10">
					<nav className="flex flex-col text-center md:text-left">
						<a
							href="#"
							className="transition-colors hover:text-orange-200 font-medium"
						>
							Beranda
						</a>
						<a
							href="#features"
							className="transition-colors hover:text-orange-200 font-medium"
						>
							Fitur
						</a>
						<a
							href="#pricing"
							className="transition-colors hover:text-orange-200 font-medium"
						>
							Harga
						</a>
						<a
							href="#"
							className="transition-colors hover:text-orange-200 font-medium"
						>
							Kontak
						</a>
					</nav>
					<div className="flex flex-col align-self-start text-center md:text-left">
						<a
							href="#"
							className="transition-colors hover:text-orange-200 font-medium"
						>
							Privacy Policy
						</a>
						<a
							href="#"
							className="transition-colors hover:text-orange-200 font-medium"
						>
							Terms of Service
						</a>
					</div>
					<div className="flex gap-5 items-center">
						<a href="#" className="transition-colors hover:text-orange-200">
							<i className="ti ti-brand-facebook text-xl"></i>
						</a>
						<a href="#" className="transition-colors hover:text-orange-200">
							<i className="ti ti-brand-instagram text-xl"></i>
						</a>
						<a href="#" className="transition-colors hover:text-orange-200">
							<i className="ti ti-brand-twitter text-xl"></i>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
