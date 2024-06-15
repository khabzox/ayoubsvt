"use client";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import GoogleAdsense from "@/components/GoogleAdsense";
import { ClerkProvider } from "@clerk/nextjs";
import { frFR } from "@clerk/localizations";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
// import Head from "next/head";

const CrispWithNoSSR = dynamic(() => import("../components/crisp"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider localization={frFR}>
      <html lang="fr">
        <head>
          <link rel="manifest" href="/manifest.json" />
          <meta
            content="AyoubSVT, ayoubsvt,SVT, svt, Alloschool, youSVT, svt 2eme annee college maroc,examen regional svt 3ème année collège maroc,examen régional svt 3ac,svt 3 annee college maroc,svt,svt maroc,examen régional svt 3ac 2022,maroc,svt collège maroc,regional svt 3ac,controle 3ac svt,controle 1 svt 3ac,controle svt 3ac s2,svt 3ème année collège maroc semestre 2,examen svt 3ac,correction examen svt 3ac,controle 1 semestre 2 svt 3ac,svt 3ac,bac maroc,examen regional svt 3ac,examen svt 3ac semestre 2,ayoub, aayousvt, ayoubsvt,ayyoubsvt, ayoubvt, aoubsvt, school, online, aybvt, svt2023, svt 2023, ayoubsvt2023, ayoub SVT 2023, svt,svt fabour,voiiila svt,driss dotcom svt,svt collège maroc,svt 2eme annee college maroc,ayub,ayob,touba,boubine,asmawiyou,hazrat ayub,muqam ayub as,aya,sub,hazrat ayub as,tour,cours,gamou,aya el,taous,hazrat ayub ka waqia,humour,embryo,bouton embryonnaire,darsou,zubair,taousse,taoussi,laaouani,tivaoune,aderdour,prof ouhbi,kader aoun,poursuite,comedyclub,comedy club,moukhadima,adoumy noob,embryologie,coeur,svt,rappels de cours,cours,le coeur,svt concours,exercice sur le coeur,dissection coeur,structure du coeur,battements du coeur,svt bac,fonctionnement du coeur,cortex moteur,svt lycée,svt examen,les lois de la génétique,le monde de jamy,professeur,tour du monde,tanguy de lamotte,analyse de document,neurosciences,seconde,système de circulation,glucides,jeunesse,myocarde,tp seconde,les valvules cardiaques,organe des sens,ayoub,ayoub simo,ayoub w simo,ayoub boussif,ayoub & simo,ayoub monster,rudy ayoub,ayoub anbawi,soufiane ajoud,ayoub ouarghi,ayoub anbaoui,ayoub het monster,ayoub anbaoui - 30,ayoub anbaoui 2020,french montana ayoub slidin,ayoub1080p,ray,youtube trending,7toun,7 toun,kouz1,dzayer,wayway,humour,touzani,ouarghi,simo ray,boussif,matchday,gameplay,kader aoun,mouh milano,comedyclub,comedy club,underground,nizar ouarghi,examen regional svt 3ème année collège maroc,svt 3 annee college maroc,examen régional svt 3ac,svt,examen régional 3ac svt maroc,examen régional svt 3ac 2022,svt maroc,examen regional svt 3ème année collège maroc 2021,svt 3ème année collège maroc,svt 2eme annee college maroc,regional svt 3ac,svt 3ac,svt maroc microorganismes,svt 1ere annee college maroc,svt regional 3ac,svt 3ème année collège maroc semestre 2,controle 3ac svt,2bac,2bac biof,chimie 2bac,examen national svt 2bac svt 2022,cours chimie 2bac,suivie temporel 2bac,reported speech 2bac,2 bac,examen national svt 2bac svt 2022 session normale option français,résumé des cours chimie 2bac,bac,2bac english reported speech,examen national svt 2bac svt 2022 session normale biof,#2bac #do_or_die #rap #hiphop,correction examen nationale svt 2bac svt 2022 normale option français,1bac,#1bac,1bac biof,économie générale 1bac,1bac économie générale,bac,1 bac sm,1 bac s.ex,balzac,français 1 bac,1 bac français,bacmaroc,bac libre,1èreannéebac,première année bac,deuxième année bac,examen régional français 1 bac,le français facile,communiquer facilement,les concepts économiques de base,caracteristique du champ magnétique,les fondements de base de la science économique,productionécrite,examenrégional,ledernierjourd'uncondamné,1ac,1ac ii,1ac coach inside indian railways,surveyor 1ac,1stac,fluke 1ac-a 2,les puissances 1ac,surveyor 1ac-d 2,ac,aliexpress surveyor 1ac,math 1ac biof puissances,devoir n2 1ac 1er semestre,1ac-ii,qs-1ac,les puissances exercices 1ac,difference between 1ac 2ac 3ac,étincelle physique chimie 1ac,al moufid en math 1ac p 48 partie 2,2ac,3ac,al moufid en math 1ac page 48 partie 2,correction de devoir surveillé n2 1ac,1aec,2ac,svt 2ac,fluke 2ac,2ac coach,maths 2ac,rocket 2ac,2ac train india,2ac indian train,2ac coach inside indian railways,2ac train in india,étincelle math 2ac,2ac overnight train,al moufid en math 2ac p 147,rocket 2ac prism antenna,2ac coach indian railways,rocket 2ac prism firmware,al moufid en math 2ac page 147,etincelle mathematique 2ac,yd-2ac,2ac coach facilities in hindi,etincelle physique chimie 2ac,rocket 2ac prism as access point,pac,3ac,3ac gtx,gtx 3ac,3ac ftx,3ac sbf,ftx 3ac,examen régional svt 3ac,regional svt 3ac,3ac yacht,su zhu 3ac,zhu su 3ac,3ac voyager,3issi tv 3ac,three arrows capital 3ac,3ac coinflex,coinflex 3ac,3ac founders,quiebra de 3ac,3ac explained,examen régional svt 3ac 2022,3rdac,kyle davies 3ac,3ac bankruptcy,résumé maths 3ac,resume de svt 3ac,3ac new exchange,3ac rise and fall,translation 3ac,résumé svt 3ac pdf,3issi tv 3ac,svt 3ac,biof,svt 3ac biof,3ac,la digestion 3ac,svt 3ème année collège biof,examen régional 3ac biof svt,svt biof 3ac le systeme nerveux,examen régional svt 3ac,biof maroc,régionale 3ac,absorption 3ac,regional svt 3ac,maths 3ac,l'absorption 3ac,la respiration 3ac,3acbiof,svt 3ac international,examen regional svt 3ac,1acbiof,2acbiof,résumé math 3ac,l'immunité 3ac,les microbes 3ac,immunologie 3ac,controle svt 3ac,bac,que faire apres le bac,après le bac,que faire après le bac,apres le bac,etudes apres le bac,orientation après bac,apres le bac que faire,que faire apres le bac es,orientation apres le bac,bac es,que faire apres un bac s,quoi faire après le bac,que faire après le bac ?,aprés un bac,bac stmg,que faire apres un bac pro,que fait après le bac,s'orienter après le bac,علوم الحياة و الارض,منهجية الاجابة في مادة العلوم الطبيعية بكالوريا 2023 bac 2023,علوم الطبيعة و الحياة,الاستاذ بن عثمان علوم الطبيعة و الحياة,منهجية الاجابة في مادة العلوم الطبيعية اولى ثانوي,الأستاذة كتفي شريف زينة لمادة علوم الطبيعةوالحياة,آفاق شعبة علوم الحياة,منهجية الاجابة في العلوم الطبيعية,المنهجية الجديدة في العلوم,قناة التفوق بامتياز,التحليل والتفسير في العلوم الطبيعية,الاختبار الاول في العلوم الطبيعية السنة الأولى,منهجية التحليل في العلوم الطبيعية,orientation après le bac,علوم الحياة والارض,علوم الحياة والأرض,ملخص علوم الحياة والارض,دروس علوم حياة والارض 2 باك,دروس علوم الحياة والارض,ملخص جميع دروس علوم الحياة والارض,جميع دروس علوم الحياة والأرض الدورة,دروس علوم الحياة و الأرض ثانية باكالوريا,شرح دروس علوم الحياة و الأرض ثانية باكالوريا,وطني علوم الحياة والارض,كيفاش نجاوب في مادة علوم الحياة والأرض,علوم الحياة والارض الاولى اعدادي,فروض الأولى إعدادي علوم الحياة والارض,علوم الحياة والارض الثالثة اعدادي,trouver sa voie après le bac, علوم الحياة والأرض,دروس علوم الحياة والأرض,علوم الحياة و الارض,مميزات حصة علوم الحياة و الارض,ديداكتيك علوم الحياة و الارض,ديداكتيك علوم الحياة والأرض,في مادة علوم الحياة و الارض,جدادة علوم الحياة والارض,جدادة درس علوم الحياة و الارض,متهجية تدريس علوم الحياة و الارض,درس علوم الحياة و الارض,زيادة مناعة الجسم,جذاذة علوم الحياة و الارض,اعلان دروس الدعم و التقوية,دروس الدعم,ديداكتيك علوم الحياة والارض,دروس الدعم والتقوية للبكالوريا,دروس الدعم و التقوية,bac de francais,دروس الدعم,دروس,دروس الدعم فيزياء,دروس الدعم والتقوية,دروس الدعم الخصوصية,جمعية الدعم المدرسي,دروس الدعم لغة فرنسية,دروس الدعم فالرياضيات,دروس الدعم علوم طبيعية,دروس الدعم لغة إنجليزية,دروس الدعم في الرياضيات,مدرسة خاصة بدروس الدعم,اسرار الربج من دروس الدعم,نموذج مشروع الدعم التربوي,الدعم المدرسي,مركز الدعم,مشروع الدعم المدرسي,دروس الدعم والتقوية_مشروع ناجح,الدروس الخصوصية,كيفية ادخال دروس الدعم للاكاديمية,مركز الدعم المدرسي,دروس دعم ,le bac,علوم الحياة والارض,ملخص علوم الحياة والارض,علوم الحياة والأرض,دروس علوم حياة والارض 2 باك,جميع دروس علوم الحياة والأرض الدورة,ملخص جميع دروس علوم الحياة والارض,دروس علوم الحياة والارض,علوم الحياة و الأرض,دروس علوم الحياة والأرض,باكالوريا علوم الحياة والأرض,دروس علوم الحياة والأرض الفصل الأول علم البيئة,دروس علوم الحياة و الأرض ثانية باكالوريا,دروس علوم الحياة والأرض جدع مشترك علوم خيار فرنسية,وطني علوم الحياة والارض,شرح دروس علوم الحياة و الأرض ثانية باكالوريا,الصف الاول الاعدادي,الأولى إعدادي,الاولى اعدادي,فروض الأولى إعدادي الدورة الثانية,الفرض الأول الدورة الثانية الأولى إعدادي,فروض الاجتماعيات الاولى اعدادي الدورة الأولى مع التصحيح,اولى اعدادي,الفرض الأول الدورة الأولى الأولى إعدادي,الأولى اعدادي,الاولى اعدادي الفيزياء,هندسة الصف الاول الاعدادي الترم الثاني,السنة الأولى اعدادي,الفرض الثاني الدورة الثانية الأولى إعدادي,الفرض الثالث الاولى اعدادي مسار دولي,فروض الرياضيات المستوى الاولى اعدادي"
            name="keywords"
          />
          <meta name="theme-color" content="#9400FF" />
          <meta content="khabzox" name="author" />
          <meta content="AyoubSVT" property="og:title" />
          <meta
            content="Un site ciblé spécialisé dans les sciences de la vie et de la terre. Il propose un laboratoire virtuel et des cours pour tous les niveaux pour aider les enseignants et les élèves à développer la méthode d'apprentissage de la matière !"
            property="og:description"
          />
          <meta content="/readme-bk.png" property="og:image" />
          <meta content="1200" property="og:image:width" />
          <meta content="630" property="og:image:height" />
          <meta content="website" property="og:type" />
        </head>
        <body className={inter.className}>
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
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
