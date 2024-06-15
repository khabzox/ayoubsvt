import HeadAD from "@/components/HomePage/HeadAd/headAd";
import Header from "@/components/HomePage/Header/header";
import Contact from "@/components/HomePage/Contact/contact";
import Footer from "@/components/HomePage/Footer/footer";

export const metadata = {
  title: "AyoubSVT | Contactez-Nous",
  description:
    "Vous avez des questions, des suggestions ou simplement envie de discuter? N'hésitez pas à nous contacter chez AyoubSVT. Utilisez notre formulaire de contact ou retrouvez nos coordonnées ci-dessous. Nous sommes là pour vous aider et nous réjouissons de prendre de vos nouvelles!",
  keywords: "Contact, contact Ayoubsvt, ayoubsvt.com, email",
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
