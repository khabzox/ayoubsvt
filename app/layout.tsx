import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { frFR } from "@clerk/localizations";

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
      <body className={`dark:bg-light ${inter.className}`}>
        <ClerkProvider localization={frFR}>
          {children}
          <Analytics />
          <SpeedInsights />
        </ClerkProvider>
      </body>
    </html>
  );
}  