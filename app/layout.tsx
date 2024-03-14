import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import GoogleAdsense from "../components/GoogleAdsense/GoogleAdsense";
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { frFR } from "@clerk/localizations";
import GoogleAnalytics from "../components/GoogleAnalytics/GoogleAnalytics";
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "AyoubSVT | SCIENCES DES SVT",
  description: "Un site ciblé spécialisé dans les sciences de la vie et de la terre. Il propose un laboratoire virtuel et des cours pour tous les niveaux pour aider les enseignants et les élèves à développer la méthode d'apprentissage de la matière !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4744380504125119"
     ></script>
      <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`dark:bg-light ${inter.className}`}>
        <ClerkProvider localization={frFR}>
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id= 
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
          {children}
          <Analytics />
          <SpeedInsights />
        </ClerkProvider>
      </body>
      <GoogleAdsense pId="（AdsenseのID）" />
    </html>
  );
}  