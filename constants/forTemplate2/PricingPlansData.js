import { Star, Zap, Crown } from 'lucide-react';

export const plans = [
  {
    id: 'basic',
    name: 'Dasar',
    description: 'Sempurna untuk pemula yang ingin memulai',
    monthlyPrice: 99000,
    annualPrice: 990000,
    icon: Star,
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Website Responsif',
      '3 Halaman',
      'Domain Gratis 1 Tahun',
      'SSL Certificate',
      'Email Support',
      'SEO Dasar'
    ],
    popular: false,
    buttonText: 'Pilih Paket'
  },
  {
    id: 'pro',
    name: 'Profesional',
    description: 'Untuk bisnis yang berkembang pesat',
    monthlyPrice: 199000,
    annualPrice: 1990000,
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    features: [
      'Semua fitur Dasar',
      '10 Halaman',
      'E-commerce Ready',
      'Analytics Dashboard',
      'Live Chat Support',
      'SEO Premium',
      'Social Media Integration',
      'Monthly Report'
    ],
    popular: true,
    buttonText: 'Mulai Sekarang'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Solusi lengkap untuk perusahaan besar',
    monthlyPrice: 399000,
    annualPrice: 3990000,
    icon: Crown,
    color: 'from-orange-500 to-red-500',
    features: [
      'Semua fitur Profesional',
      'Unlimited Halaman',
      'Custom Development',
      'Priority Support 24/7',
      'Advanced Analytics',
      'Multi-language Support',
      'API Integration',
      'Dedicated Account Manager'
    ],
    popular: false,
    buttonText: 'Hubungi Sales'
  }
];
