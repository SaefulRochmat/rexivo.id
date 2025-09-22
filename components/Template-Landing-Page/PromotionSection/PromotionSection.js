'use client';

import { Zap, Check } from "lucide-react";
import { usePromotionSection } from "@/hooks/forComponentsTemplate/usePromotionSection";
import { features, additionalFeatures } from "@/constants/forTemplate2/PromotionFeatures";
import { mockupImages } from "@/constants/forTemplate2/PromotionMockup";

export default function PromotionSection() {
  const { isVisible, currentImageIndex } = usePromotionSection(mockupImages.length);

  return (
    <div id="Services" className='px-1 py-2 mt-8'>
      <div className="min-h-screen bg-gradient-to-br rounded-lg from-slate-50/30 via-transparent to-cyan-500/35 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-sky-300 to-yellow-300 bg-clip-text text-transparent mb-4 animate-pulse">
              Buat Website Sesuai Keinginanmu!
            </h1>
            <div className="h-1 w-32 bg-yellow-300 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-100 mt-6 max-w-2xl mx-auto leading-relaxed">
              Cocok untuk Website Perusahaan, Website Pribadi, Blog, dan Toko Online
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                  Apa yang kamu dapatkan dalam jasa pembuatan website IDwebhost?
                </h2>

                <div className="space-y-6">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className={`flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 hover:shadow-md transition-all cursor-pointer group`}>
                        <div className={`p-2 rounded-lg bg-white shadow-sm group-hover:scale-110 transition-transform ${feature.color}`}>
                          <Icon size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">{feature.text}</div>
                          {feature.desc && <div className="text-sm text-gray-600 mt-1">{feature.desc}</div>}
                        </div>
                        <Check className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                      </div>
                    );
                  })}

                  {additionalFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-cyan-50 border-2 border-dashed border-emerald-200">
                      <div className="p-2 rounded-lg bg-emerald-100">
                        <Check className="text-emerald-600" size={24} />
                      </div>
                      <div className="font-semibold text-emerald-700">{feature}</div>
                      <span className="ml-auto bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">GRATIS</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 transition-all">
                    <span className="relative z-10 flex items-center gap-2">
                      Pilih Template
                      <Zap size={20} className="group-hover:animate-spin" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT (Mockup Images) */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative bg-gray-800 rounded-3xl p-6 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden shadow-inner">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    {mockupImages.map((img, index) => (
                      <img key={index} src={img} alt={`Website template ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 text-center flex justify-center gap-4 flex-wrap">
            <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">🚀 Launch dalam 2 hari</div>
            <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">💰 Mulai Rp36.900/bulan</div>
            <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">🎨 Ratusan Template</div>
          </div>
        </div>
      </div>
    </div>
  );
}
