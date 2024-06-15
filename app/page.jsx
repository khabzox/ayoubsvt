import { Suspense } from "react";
import Header from "@/components/HomePage/Header/header";
import Hero from "@/components/HomePage/Hero/hero";
import HeadAd from "@/components/HomePage/HeadAd/headAd";
import Levels from "@/components/HomePage/Levels/level";
import CTA from "@/components/HomePage/CTA/cta";
import Feature from "@/components/HomePage/Features/Features";
import ScrollToTop from "@/components/HomePage/ScrollToTop";
import About from "@/components/HomePage/About/about";
import Contact from "@/components/HomePage/Contact/contact";
import Footer from "@/components/HomePage/Footer/footer";

export const metadata = {
  title: "AyoubSVT",
  description: "Un site ciblé spécialisé dans les sciences de la vie et de la terre. Il propose un laboratoire virtuel et des cours pour tous les niveaux pour aider les enseignants et les élèves à développer la méthode d'apprentissage de la matière !",
};

export default function Home() {
  return (
    <>
      <HeadAd />
      {/* <Suspense> */}
      <Header />
      {/* </Suspense> */}
      <main className="mx-auto max-w-screen-xl ">
        <Hero />
        <Levels />
        <Feature />
        <About />
        <CTA />
        <Contact />
        {/* <ScrollToTop /> */}
      </main>
      <Footer />
    </>
  );
}
