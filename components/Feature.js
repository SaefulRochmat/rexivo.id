import { Zap, Palette, Wallet } from "lucide-react";

const features = [
	{
		icon: <Zap className="w-8 h-8 text-primary" />,
		title: "Proses Cepat",
		desc: "Dapatkan website siap online dalam hitungan hari.",
	},
	{
		icon: <Palette className="w-8 h-8 text-primary" />,
		title: "Desain Elegan",
		desc: "UI modern dan responsif di semua perangkat.",
	},
	{
		icon: <Wallet className="w-8 h-8 text-primary" />,
		title: "Harga Terjangkau",
		desc: "Layanan premium tanpa menguras dompet.",
	},
];

const Features = () => {
	return (
		<section id="features" className="py-20 bg-gray-100">
			<div className="max-w-7xl mx-auto px-4 text-center">
				<h3 className="text-3xl font-bold mb-12">Kenapa Memilih rexivo.id?</h3>
				<div className="grid md:grid-cols-3 gap-10">
					{features.map((f, i) => (
						<div key={i} className="bg-white p-6 rounded-lg shadow-md">
							<div className="mb-4 flex justify-center">{f.icon}</div>
							<h4 className="text-xl font-semibold mb-2">{f.title}</h4>
							<p>{f.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
