import HeadAD from "@/components/HomePage/HeadAd/headAd";
import Header from "@/components/HomePage/Header/header";
import Footer from "@/components/HomePage/Footer/footer";
// import ScrollToTop from '@/components/ScrollToTop/page';
import About from "@/components/HomePage/About/about";

export const metadata = {
  title: "AyoubSVT | À-PROPOS",
  description: "À-PROPOS fournit des informations détaillées sur notre mission, notre vision et l'équipe derrière AyoubSVT. Apprenez-en plus sur nos objectifs, nos valeurs et le parcours qui nous motive à soutenir l'éducation en sciences et sciences de la vie.",
};

export default function ContactUS() {
  return (
    <>
      <HeadAD />
      <Header />
      <main className="mb-20">
        <About />
        {/* <ScrollToTop /> */}
      </main>
      <Footer />
    </>
  );
}
