const Pricing = () => {
	const data = [
		{
			plan: "Kantong Pelajar",
			description: "Cocok untuk kantong pelajar",
			price: "Rp. 500.000",
			features: ["Feature 1", "Feature 2", "Feature 3"],
		},
		{
			plan: "Bisnis Promosi",
			description: "Cocok untuk bisnis promosi",
			price: "Rp. 1.500.000",
			features: ["Feature A", "Feature B", "Feature C", "Feature D"],
		},
		{
			plan: "Kantong Perusahaan",
			description: "Cocok untuk perusahaan",
			price: "Rp. 3.500.000",
			features: [
				"Feature E",
				"Feature F",
				"Feature G",
				"Feature H",
				"Feature I",
				"Feature J",
			],
		},
	];
	return (
		<div
			className="my-16 flex w-full flex-col items-center gap-8 px-2"
			id="pricing"
		>
			<h1 className="text-3xl font-bold">List Harga</h1>

			<div className="flex w-full max-w-7xl flex-col gap-10 md:flex-row">
				{data.map((plan, index) => (
					<div
						key={index}
						className="flex w-full flex-1 flex-col gap-4 rounded-xl border border-black/10 bg-white p-8 shadow-md dark:border-gray-50/[.1] dark:bg-gray-50/[.05] min-h-[400px] transition-transform duration-300 hover:scale-105"
					>
						<h2 className="text-lg font-semibold">{plan.plan}</h2>
						<p className="text-sm text-gray-500">{plan.description}</p>
						<p className="mt-4 text-2xl font-bold">{plan.price}</p>
						<ul className="mt-4 flex flex-col gap-2">
							{plan.features.map((feature, idx) => (
								<li
									key={idx}
									className="text-sm text-gray-700 dark:text-gray-300"
								>
									• {feature}
								</li>
							))}
						</ul>
						<div className="flex-1" />
						<button className="mt-6 w-full rounded-md border border-transparent bg-[#60B5FF] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#60B5FF]/80 block">
							Pilih Paket
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Pricing;
