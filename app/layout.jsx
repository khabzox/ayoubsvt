"use client";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import GoogleAdsense from "@/components/GoogleAdsense";
import { ClerkProvider } from "@clerk/nextjs";
import { frFR } from "@clerk/localizations";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic'

const CrispWithNoSSR = dynamic(
  () => import('../components/crisp'),
  { ssr: false }
)

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider localization={frFR}>
      <html lang="fr">
        <body className={inter.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />) : null}
          {children}
          <CrispWithNoSSR />
          <Analytics />
          <SpeedInsights />
        </body>
        <GoogleAdsense pId={process.env.GOOGLE_ADSENSE_PID} />
      </html>
    </ClerkProvider>
  );
}
