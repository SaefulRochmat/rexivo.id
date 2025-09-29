import { Organization, WebSite, WithContext } from 'schema-dts';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rexivo.id',
  url: 'https://rexivo-id.vercel.app',
  logo: 'https://rexivo-id.vercel.app/logo.png',
  sameAs: [
    'https://facebook.com/rexivoid',
    'https://twitter.com/rexivoid',
    'https://instagram.com/rexivoid',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+62-878-474-733-56',
    contactType: 'customer service',
    email: 'rexivoid@gmail.com',
    areaServed: 'ID',
    availableLanguage: ['Indonesian', 'English'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Majalengka',
    addressRegion: 'Jawa Barat',
    postalCode: '45411',
    addressCountry: 'ID',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Rexivo.id',
  url: 'https://rexivo-id.vercel.app',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://rexivo-id.vercel.app/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Jasa Pembuatan Website Profesional',
  provider: {
    '@type': 'Organization',
    name: 'Rexivo.id',
  },
  areaServed: 'ID',
  description: 'Jasa pembuatan website profesional dengan harga terjangkau untuk bisnis, perusahaan, dan personal.',
  offers: {
    '@type': 'Offer',
    priceRange: 'IDR 500.000 - IDR 10.000.000',
  },
};