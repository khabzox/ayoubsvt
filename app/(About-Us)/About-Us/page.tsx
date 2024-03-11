import Header from '../../../components/Header/page';
import Contact from '../../../components/Contact/page';
import Footer from '../../../components/Footer/page';
import ScrollToTop from '../../../components/ScrollToTop/page';
import About from '../../../components/About/page';
import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: "AyoubSVT | À PROPOS DE NOUS",
    description: "Découvrez l'univers d'AyoubSVT, votre source fiable d'informations et de contenus captivants. À PROPOS DE NOUS, plongez dans notre histoire, notre mission, et notre passion pour fournir des informations de qualité. Explorez notre engagement envers nos visiteurs et la manière dont nous façonnons l'expérience en ligne. Bienvenue dans notre monde chez AyoubSVT.",
    keywords: "about ayoubsvt, about us, ayoubsvt.com , ayoubsvt, À PROPOS",
};

export default function ContactUS() {
    return (
    <>
    <Header /> 
        <main className='mb-20'>
            <About/>
            <ScrollToTop />
        </main>
    <Footer />
    </>
  );
};