import HeadAD from '@/components/HomePage/HeadAd/headAd';
import Header from '@/components/HomePage/Header/header';
import Footer from '@/components/HomePage/Footer/footer';
// import ScrollToTop from '@/components/ScrollToTop/page';
import About from '@/components/HomePage/About/about';

export const metadata = {
    title: "AyoubSVT | À PROPOS DE NOUS",
    description: "Découvrez l'univers d'AyoubSVT, votre source fiable d'informations et de contenus captivants. À PROPOS DE NOUS, plongez dans notre histoire, notre mission, et notre passion pour fournir des informations de qualité. Explorez notre engagement envers nos visiteurs et la manière dont nous façonnons l'expérience en ligne. Bienvenue dans notre monde chez AyoubSVT.",
    keywords: "about ayoubsvt, about us, ayoubsvt.com , ayoubsvt, À PROPOS",
};

export default function ContactUS() {
    return (
    <>
    <HeadAD/>
    <Header /> 
        <main className='mb-20'>
            <About/>
            {/* <ScrollToTop /> */}
        </main>
    <Footer />
    </>
  );
};