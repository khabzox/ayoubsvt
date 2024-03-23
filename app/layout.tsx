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
  keywords: "www.ayoubsvt.com, ayoubsvt.com, ayoub svt, ayoubsvt, ayousvt, Prof ayoub, Prof ayoubsvt, Prof ayoub svt, yousvt, svt 1bac, svt 2bac, svt tcsf, svt 1ac, svt 2ac , svt 3ac, 1bac svt, 2bac svt, tcsf svt, 1ac svt, 2ac svt, 3ac svt, svt, etincelle svt tronc commun, svt 1ac exercices corrigés pdf, sigma svt 3ac pdf corrigé, svt 2ème année collège, examen national svt, svt 2 bac pc résumé, etincelle svt 1 bac, svt 1 année collège, you svt, svt 2 bac pc pdf, svt 1ac, programme svt 2 bac pc, érosion définition svt, contrôle svt 1ac avec correction, svt 2ac exercices corrigés pdf, وطنيات svt, svt collège exercices corrigés pdf, ملخص svt علوم فيزيائية pdf, resume svt 2 bac pc biof pdf, controle svt 1ac semestre 2, examen national svt science physique biof 2022, résumé de cours svt 3ème pdf, séisme définition svt, nationaux svt, wataniyat svt, controle svt 1ac semestre 1, svt 2ème année collège exercices corrigés pdf, جميع تعاريف svt 2bac pdf, svt 1ere annee college, contrôle svt 1ac semestre 2 avec correction, les définitions de svt 2 bac pdf, svt play, écosystème définition svt, page de garde svt, svt 2bac, ملخصات دروس svt للسنة الثالثة اعدادي بالفرنسية , svt text 377, svt 2ac exercices corrigés, les cours de svt 2 bac pc biof, programme svt 2 bac svt, toutes les définitions de svt 2 bac pc pdf, watani svt, cours svt 2 bac pc biof, respiration définition svt, examen national svt 2016 rattrapage correction, rendement énergétique svt, examen national svt avec correction, contrôle svt 2ac semestre 1 avec correction, دروس svt 2bac, svt 3ac, la formation des chaînes de montagnes cours svt, atp svt, cours svt 2 bac svt biof, resume svt 2 bac pc biof, résumé svt 3ac pdf, examen national svt science physique biof avec correction, examen national svt 2017 rattrapage correction, cours svt 1ac, cours svt 2 bac pc biof pdf, svt 1ère année collège en français pdf, تعاريف علوم الحياة و الأرض السنة الثانية باكالوريا svt pdf, etincelle svt 1 bac sm, svt image, svt 1 bac science ex exercices corrigés pdf, les définitions de svt 2 bac, exercices corrigés svt 2 bac pdf, exercice de svt 1ère année collège en français avec correction, manhaj. ma svt, manhaj svt, sciences de la vie et de la terre (svt) 1ère année collège, définitions svt 2 bac pc pdf,  ملخصات دروس svt للسنة الثالثة اعدادي بالفرنسية pdf, national svt, examen national svt biof science svt 2022, les definitions de svt 2 bac science physique, examen national svt 2018 rattrapage correction, svt 2ac, nutriment définition svt, examen svt 2 bac pc, national 2022 svt, examen svt 2bac pc, svt 1 année collège pdf, examen national svt 2022 science physique, bac libre svt, examen national svt 2019 rattrapage correction, svt 2 bac, svt sciences, svt 2ème année collège pdf, examen national svt 2022 rattrapage, national svt 2016 rattrapage svt, examen national svt 2 bac pc, ملخصات دروس علوم الحياة والأرض للسنة الثانية باكالوريا svt pdf, les définitions de svt 2 bac science physique semestre 1 pdf, examens nationaux svt biof, fécondation définition svt, svt nyheter, principe de continuité svt, résumé svt 3ac pdf s1 ",
  themeColor: "#9400FF"
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
      <GoogleAdsense pId="4744380504125119" />
    </html>
  );
}  