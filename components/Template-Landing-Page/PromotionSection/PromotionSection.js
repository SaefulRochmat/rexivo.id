'use client'

import React, { useState, useEffect } from 'react';
import { Check, Zap, Globe, Heart, Shield, Headphones } from 'lucide-react';

export default function PromotionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate mockup images
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Zap, text: "Cepat", desc: "Siap digunakan dalam 2 hari", color: "text-emerald-500" },
    { icon: Globe, text: "Mudah", desc: "Pesan, bayar, langsung proses", color: "text-blue-500" },
    { icon: Heart, text: "Murah", desc: "Hanya Rp36.900,-/bulan", color: "text-pink-500" },
    { icon: Shield, text: "Ratusan template", desc: "siap dipakai", color: "text-purple-500" },
    { icon: Check, text: "Support SEO", desc: "Mudah ditemukan Google", color: "text-green-500" },
    { icon: Headphones, text: "Layanan prima 24/7", desc: "", color: "text-orange-500" }
  ];

  const additionalFeatures = [
    "GRATIS domain hosting"
  ];

  const mockupImages = [
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f8fafc'/%3E%3Crect width='280' height='40' x='10' y='10' fill='%23e2e8f0' rx='4'/%3E%3Crect width='60' height='20' x='220' y='20' fill='%233b82f6' rx='10'/%3E%3Crect width='120' height='80' x='20' y='60' fill='%23e2e8f0' rx='4'/%3E%3Crect width='120' height='80' x='160' y='60' fill='%23e2e8f0' rx='4'/%3E%3Crect width='260' height='30' x='20' y='150' fill='%23f1f5f9' rx='4'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23fef7ff'/%3E%3Crect width='280' height='30' x='10' y='10' fill='%23e879f9' rx='4'/%3E%3Crect width='80' height='60' x='20' y='50' fill='%23f3e8ff' rx='4'/%3E%3Crect width='80' height='60' x='110' y='50' fill='%23f3e8ff' rx='4'/%3E%3Crect width='80' height='60' x='200' y='50' fill='%23f3e8ff' rx='4'/%3E%3Crect width='260' height='60' x='20' y='120' fill='%23fdf4ff' rx='4'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0fdf4'/%3E%3Crect width='280' height='35' x='10' y='10' fill='%2322c55e' rx='4'/%3E%3Ccircle cx='60' cy='70' r='25' fill='%23dcfce7'/%3E%3Crect width='180' height='15' x='100' y='60' fill='%23bbf7d0' rx='2'/%3E%3Crect width='120' height='10' x='100' y='80' fill='%23d1fae5' rx='2'/%3E%3Crect width='260' height='80' x='20' y='110' fill='%23f7fee7' rx='4'/%3E%3C/svg%3E"
  ];

  return (
    <div className='px-1 py-2 mt-8'>
    <div className="min-h-screen bg-gradient-to-br rounded-lg from-slate-50/30 via-transparent to-cyan-500/35 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with animated gradient */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-sky-300 to-yellow-300 bg-clip-text text-transparent mb-4 animate-pulse">
              Buat Website Sesuai Keinginanmu!
            </h1>
            <div className="h-1 w-32 bg-yellow-300 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-slate-100 mt-6 max-w-2xl mx-auto leading-relaxed">
            Cocok untuk Website Perusahaan, Website Pribadi, Blog, dan Toko Online
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                Apa yang kamu dapatkan dalam jasa pembuatan website IDwebhost?
              </h2>

              <div className="space-y-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div 
                      key={index}
                      className={`flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group ${isVisible ? 'animate-bounce' : ''}`}
                      style={{ animationDelay: `${index * 0.1}s`, animationDuration: '1.5s', animationFillMode: 'both' }}
                    >
                      <div className={`p-2 rounded-lg bg-white shadow-sm group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                          {feature.text}
                        </div>
                        {feature.desc && (
                          <div className="text-sm text-gray-600 mt-1">
                            {feature.desc}
                          </div>
                        )}
                      </div>
                      <Check className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
                    </div>
                  );
                })}

                {additionalFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-cyan-50 border-2 border-dashed border-emerald-200 hover:border-solid hover:border-emerald-400 transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-emerald-100">
                      <Check className="text-emerald-600" size={24} />
                    </div>
                    <div className="font-semibold text-emerald-700">
                      {feature}
                    </div>
                    <div className="ml-auto">
                      <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                        GRATIS
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8 text-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Pilih Template
                    <Zap size={20} className="group-hover:animate-spin" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-white/30 rounded-full animate-ping"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Mockup */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Device Frame */}
              <div className="bg-gray-800 rounded-3xl p-6 shadow-2xl transform hover:rotate-1 transition-all duration-500">
                <div className="bg-white rounded-2xl overflow-hidden shadow-inner">
                  {/* Browser Bar */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg px-3 py-1 text-xs text-gray-500 ml-4">
                      www.website-kamu.com
                    </div>
                  </div>
                  
                  {/* Website Content */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    {mockupImages.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Website template ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                          index === currentImageIndex 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-105'
                        }`}
                      />
                    ))}
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg animate-bounce">
                      <span className="text-xs font-semibold text-green-600">Online</span>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 bg-purple-500/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg text-white text-xs animate-pulse">
                      Responsive Design
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce"></div>
              </div>

              {/* Stats Cards */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-xl p-4 shadow-xl border-l-4 border-emerald-500 animate-pulse">
                <div className="text-2xl font-bold text-emerald-600">99.9%</div>
                <div className="text-xs text-gray-600">Uptime</div>
              </div>

              <div className="absolute -right-8 bottom-1/4 bg-white rounded-xl p-4 shadow-xl border-l-4 border-blue-500 animate-pulse" style={{animationDelay: '0.5s'}}>
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-xs text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative section */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 animate-pulse">
              <span className="text-sm font-medium text-gray-700">🚀 Launch dalam 2 hari</span>
            </div>
            <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 animate-pulse" style={{animationDelay: '0.2s'}}>
              <span className="text-sm font-medium text-gray-700">💰 Mulai Rp36.900/bulan</span>
            </div>
            <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 animate-pulse" style={{animationDelay: '0.4s'}}>
              <span className="text-sm font-medium text-gray-700">🎨 Ratusan Template</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}