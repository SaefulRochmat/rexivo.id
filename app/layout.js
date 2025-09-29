import { Quicksand } from "next/font/google";
import "@tabler/icons-webfont/dist/tabler-icons.min.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from 'next/script';
import { organizationSchema, websiteSchema, serviceSchema } from '@/lib/schema';

const quicksand = Quicksand({
	variable: "--font-quicksand",
	subsets: ["latin"],
});

export const metadata = {
	metadataBase: new URL('https://rexivo-id.vercel.app'),
	title: {
		default: "Rexivo.id - Jasa Pembuatan Website Profesional",
		template: "%s | Rexivo.id"
	},
	description: "Rexivo.id adalah jasa pembuatan website profesional dengan harga terjangkau. Kami menyediakan layanan pembuatan website untuk bisnis, perusahaan, dan personal.",
	keywords: ["jasa pembuatan website", "web development", "website profesional", "website bisnis", "website perusahaan"],
	authors: [{ name: "Rexivo Team" }],
	creator: "Rexivo.id",
	publisher: "Rexivo.id",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'id_ID',
		url: 'https://rexivo-id.vercel.app',
		siteName: 'Rexivo.id',
		title: 'Rexivo.id - Jasa Pembuatan Website Profesional',
		description: 'Rexivo.id adalah jasa pembuatan website profesional dengan harga terjangkau. Kami menyediakan layanan pembuatan website untuk bisnis, perusahaan, dan personal.',
		images: [
			{
				url: '/Images/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Rexivo.id - Jasa Pembuatan Website Profesional',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Rexivo.id - Jasa Pembuatan Website Profesional',
		description: 'Rexivo.id adalah jasa pembuatan website profesional dengan harga terjangkau. Kami menyediakan layanan pembuatan website untuk bisnis, perusahaan, dan personal.',
		images: ['/Images/og-image.jpg'],
		creator: '@rexivoid',
	},
	verification: {
		google: 'your-google-verification-code',
		yandex: 'your-yandex-verification-code',
		yahoo: 'your-yahoo-verification-code',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="id">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#4F46E5" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content="Rexivo.id" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="msapplication-TileColor" content="#4F46E5" />
				<meta name="msapplication-tap-highlight" content="no" />

				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icon-192.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4F46E5" />

				<Script
					id="organization-schema"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
				/>
				<Script
					id="website-schema"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
				/>
				<Script
					id="service-schema"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
				/>
			</head>
			<body className={`${quicksand.variable} antialiased`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
