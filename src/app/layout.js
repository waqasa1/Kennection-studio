import { Cormorant_Garamond, EB_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://kennection.pk'),
  title: "KENNECTION — Visual Production Studio | Pakistan",
  description: "Premium cinematic campaigns, commercial photography, and creative direction for brands and content creators. Based in Pakistan.",
  openGraph: {
    title: "KENNECTION — Visual Production Studio",
    description: "Your Brand. Our Frame. Cinematic campaigns for brands and content creators.",
    url: "https://kennection.pk",
    siteName: "Kennection",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KENNECTION — Visual Production Studio",
    description: "Your Brand. Our Frame. Cinematic campaigns for brands and content creators.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${cormorant.variable} ${ebGaramond.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
