import Header from '../../../components/Header/page';
import Contact from '../../../components/Contact/page';
import Footer from '../../../components/Footer/page';
import ScrollToTop from '../../../components/ScrollToTop/page';

import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: "AyoubSVT | Contactez-Nous",
    description: "Vous avez des questions, des suggestions ou simplement envie de discuter? N'hésitez pas à nous contacter chez AyoubSVT. Utilisez notre formulaire de contact ou retrouvez nos coordonnées ci-dessous. Nous sommes là pour vous aider et nous réjouissons de prendre de vos nouvelles!",
    keywords: "Contact, contact Ayoubsvt, ayoubsvt.com, email",
};

export default function ContactUS() {
    return (
    <>
    <Header /> 
        <main>
            <Contact />
            <ScrollToTop />
        </main>
    <Footer />
    </>
  );
};