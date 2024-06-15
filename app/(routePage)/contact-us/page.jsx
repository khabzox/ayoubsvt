import HeadAD from "@/components/HomePage/HeadAd/headAd";
import Header from "@/components/HomePage/Header/header";
import Contact from "@/components/HomePage/Contact/contact";
import Footer from "@/components/HomePage/Footer/footer";

export const metadata = {
  title: "AyoubSVT | Contact-Nous",
  description: "Contact-Nous est la section idéale pour entrer en contact avec notre équipe. Que vous ayez des questions, besoin d'assistance ou souhaitiez donner votre avis, notre formulaire de contact et nos coordonnées sont disponibles pour vous aider.",
};

export default function ContactUS() {
  return (
    <>
      <HeadAD />
      <Header />
      <main>
        <Contact />
        {/* <ScrollToTop /> */}
      </main>
      <Footer />
    </>
  );
}
