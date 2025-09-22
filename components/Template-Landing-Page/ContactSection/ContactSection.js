'use client';

import { Send, MessageCircle, User, Sparkles } from "lucide-react";
import { useContactForm } from "@/hooks/forComponentsTemplate/useContactForm";
import { contactInfo } from "@/constants/forTemplate2/ContactData";

export default function ContactSection() {
  const {
    formData,
    focusedField,
    setFocusedField,
    isSubmitting,
    stars,
    handleInputChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div id="contact" className="px-1 py-2">
      <section className="relative min-h-screen rounded-lg py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0">
            {stars.map((star, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                style={star}
              />
            ))}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse opacity-60"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse opacity-40"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 shadow-lg">
              <Sparkles className="w-5 h-5 text-purple-300 mr-2 animate-pulse" />
              <span className="text-white font-medium">Mari Berkolaborasi</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-[fadeInUp_1s_ease-out]">
              Hubungi{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Kami
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-[fadeInUp_1s_ease-out_0.2s_both]">
              Siap mewujudkan ide digital Anda? Tim ahli kami menunggu untuk
              berkolaborasi dan menciptakan solusi terbaik untuk bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl animate-[slideInLeft_0.8s_ease-out]">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-purple-400" />
                  Informasi Kontak
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={index}
                        className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                          <p className="text-purple-300 font-medium">{item.info}</p>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl animate-[slideInRight_0.8s_ease-out]"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <User className="w-6 h-6 mr-3 text-purple-400" />
                  Kirim Pesan
                </h3>
                <div className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Masukkan nama lengkap"
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                        focusedField === "name"
                          ? "border-purple-400 shadow-lg"
                          : "border-white/20"
                      }`}
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField("")}
                      placeholder="nama@email.com"
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                        focusedField === "email"
                          ? "border-purple-400 shadow-lg"
                          : "border-white/20"
                      }`}
                    />
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField("")}
                      placeholder="+62 812-3456-7890"
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                        focusedField === "phone"
                          ? "border-purple-400 shadow-lg"
                          : "border-white/20"
                      }`}
                    />
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border rounded-xl text-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 border-white/20"
                    >
                      <option value="" className="text-black">Pilih subjek</option>
                      <option value="website" className="text-black">Pembuatan Website</option>
                      <option value="consultation" className="text-black">Konsultasi Gratis</option>
                      <option value="maintenance" className="text-black">Maintenance Website</option>
                      <option value="other" className="text-black">Lainnya</option>
                    </select>
                  </div>

                  {/* Message */}
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Ceritakan proyek atau kebutuhan Anda..."
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none ${
                      focusedField === "message"
                        ? "border-purple-400 shadow-lg"
                        : "border-white/20"
                    }`}
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:scale-[1.02] disabled:opacity-70"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Mengirim...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Kirim Pesan</span>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
