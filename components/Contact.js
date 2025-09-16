"use client";
import React, { useState } from "react";
import Scripts from "../lib/scripts";
import "../app/Contact.css";
import axios from "axios";
import { WEB3_FORM_ACCESS_KEY } from "../lib/config";

const Contact = () => {
	const { loadToast } = Scripts();
	const [loading, setLoading] = useState(false);

	async function handleSubmit(event) {
		event.preventDefault();
		setLoading(true);

		const formData = new FormData(event.target);
		formData.append("access_key", WEB3_FORM_ACCESS_KEY);

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		await axios
			.post("https://api.web3forms.com/submit", json, {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			})
			.then((res) => {
				if (res.data.success) {
					loadToast("success", "Pesan berhasil dikirim!");
					event.target.reset();
				} else {
					loadToast("error", "Pesan gagal dikirim!");
				}
			})
			.catch(() => {
				loadToast("error", "Terjadi kesalahan jaringan!");
				setLoading(false);
			})
			.finally(() => {
				setLoading(false);
			});
	}
	return (
		<main>
			<h1 className="text-center lg:text-3xl/tight text-2xl font-bold mb-2 pt-32 pb-5">
				Kontak <span className="font-bold text-sky-400">Kami</span>
			</h1>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-0 items-center">
				{/* Form */}
				<div className="kontak pt-2 items-center" id="kontak">
					<section className="contact">
						<form onSubmit={handleSubmit}>
							<div className="input-box">
								<label>Nama Lengkap</label>
								<input
									type="text"
									className="field"
									placeholder="Masukkan Nama Anda"
									name="name"
									required
								/>
							</div>
							<div className="input-box">
								<label>Email</label>
								<input
									type="email"
									className="field"
									placeholder="Masukkan Email Anda"
									name="email"
									required
								/>
							</div>
							<div className="input-box">
								<label>Pesan Anda</label>
								<textarea
									name="message"
									className="field mess"
									placeholder="Masukkan Pesan Anda"
									required
								></textarea>
							</div>
							<button
								type="submit"
								disabled={loading}
								className={`flex px-5 mx-0 py-2 rounded-md text-white font-bold transition-all 
                  					${
															loading
																? "bg-gray-400 cursor-not-allowed"
																: "bg-sky-400 hover:bg-sky-500"
														}`}
							>
								{loading ? (
									<span className="flex items-center gap-2">
										<svg
											className="animate-spin h-5 w-5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8v8H4z"
											></path>
										</svg>
										Mengirim...
									</span>
								) : (
									"Send Message"
								)}
							</button>
						</form>
					</section>
				</div>

				{/* Maps */}
				<div className="flex items-center rounded-lg pt-0">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.7401841727963!2d108.2136703981367!3d-6.832862575315615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f2f451bdd07cf%3A0xbe4247edd1a34a4b!2sMajalengka%20University!5e0!3m2!1sen!2sid!4v1757947177546!5m2!1sen!2sid"
						width="700"
						height="550"
						style={{ border: "0" }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="flex items-center rounded-lg"
					></iframe>
				</div>
			</div>
		</main>
	);
};

export default Contact;
