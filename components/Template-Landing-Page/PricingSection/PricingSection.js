"use client";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { usePricingSection } from "@/hooks/forComponentsTemplate/usePricingSection";
import { plans } from "@/constants/forTemplate2/PricingPlansData";

export default function PricingSection() {
	const {
		isAnnual,
		setIsAnnual,
		hoveredPlan,
		setHoveredPlan,
		formatPrice,
		calculateSavings,
	} = usePricingSection();

	return (
		<div id="pricing" className="px-1 py-2">
			<section className="py-20 bg-gradient-to-br from-red-400/50 via-green-400/30 to-blue-400/50 relative rounded-lg overflow-hidden">
				{/* Background Decorations */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
					<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
					{/* Header */}
					<div className="text-center mb-16">
						<div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
							<Sparkles className="w-5 h-5 text-purple-600 mr-2" />
							<span className="text-purple-800 font-medium text-sm">
								Harga Terjangkau
							</span>
						</div>

						<h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
							Pilih Paket yang{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
								Tepat
							</span>{" "}
							untuk Anda
						</h2>

						<p className="text-lg text-slate-100 max-w-2xl mx-auto mb-8">
							Dapatkan website profesional dengan harga yang sesuai budget Anda.
							Semua paket sudah termasuk hosting dan support penuh.
						</p>

						{/* Billing Toggle */}
						<div className="flex items-center justify-center space-x-4 bg-white rounded-full p-2 shadow-lg">
							<button
								onClick={() => setIsAnnual(false)}
								className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
									!isAnnual
										? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
										: "text-gray-600 hover:text-gray-900"
								}`}
							>
								Bulanan
							</button>
							<button
								onClick={() => setIsAnnual(true)}
								className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
									isAnnual
										? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
										: "text-gray-600 hover:text-gray-900"
								}`}
							>
								Tahunan
								<span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
									Hemat 17%
								</span>
							</button>
						</div>
					</div>

					{/* Pricing Cards */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
						{plans.map((plan) => {
							const IconComponent = plan.icon;
							const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
							const savings = calculateSavings(
								plan.monthlyPrice,
								plan.annualPrice
							);

							return (
								<div
									key={plan.id}
									className={`relative group transition-all duration-500 ${
										plan.popular ? "transform md:-translate-y-4" : ""
									}`}
									onMouseEnter={() => setHoveredPlan(plan.id)}
									onMouseLeave={() => setHoveredPlan(null)}
								>
									{plan.popular && (
										<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
											<div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
												🔥 Paling Populer
											</div>
										</div>
									)}

									<div
										className={`relative bg-white rounded-2xl p-8 shadow-xl transition-all duration-500 border-2 h-full
                    ${
											plan.popular
												? "border-purple-200 shadow-purple-100"
												: "border-gray-100 hover:border-gray-200"
										}
                    ${
											hoveredPlan === plan.id
												? "transform scale-105 shadow-2xl"
												: ""
										}`}
									>
										{/* Plan Header */}
										<div className="text-center mb-8">
											<div
												className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${
													plan.color
												} mb-4 transform transition-transform duration-300 ${
													hoveredPlan === plan.id ? "rotate-12 scale-110" : ""
												}`}
											>
												<IconComponent className="w-8 h-8 text-white" />
											</div>

											<h3 className="text-2xl font-bold text-gray-900 mb-2">
												{plan.name}
											</h3>
											<p className="text-gray-600 text-sm">
												{plan.description}
											</p>
										</div>

										{/* Pricing */}
										<div className="text-center mb-8">
											<div className="flex items-end justify-center space-x-1">
												<span className="text-4xl font-bold text-gray-900">
													{formatPrice(price).split(",")[0]}
												</span>
												<span className="text-gray-500 text-lg mb-1">
													/{isAnnual ? "tahun" : "bulan"}
												</span>
											</div>

											{isAnnual && (
												<div className="mt-2">
													<span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
														Hemat {formatPrice(savings.savings)} (
														{savings.percentage}%)
													</span>
												</div>
											)}
										</div>

										{/* Features */}
										<div className="space-y-4 mb-8">
											{plan.features.map((feature, index) => (
												<div
													key={index}
													className="flex items-start space-x-3 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
													style={{ animationDelay: `${index * 0.1}s` }}
												>
													<div
														className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mt-0.5`}
													>
														<Check className="w-3 h-3 text-white" />
													</div>
													<span className="text-gray-700 text-sm">
														{feature}
													</span>
												</div>
											))}
										</div>

										{/* CTA Button */}
										<button
											className={`w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center space-x-2 group/btn
                      ${
												plan.popular
													? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl"
													: "bg-gray-900 hover:bg-black text-white"
											}`}
										>
											<span>{plan.buttonText}</span>
											<ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<style jsx>{`
					@keyframes fadeInUp {
						from {
							opacity: 0;
							transform: translateY(20px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
				`}</style>
			</section>
		</div>
	);
}
