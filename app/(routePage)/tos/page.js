import Link from "next/link";
export const metadata = {
  title: "AyoubSVT | Term of Condition",
  description: "Term of Condition définit les termes et conditions d'utilisation de notre site web et de nos services. Cette section couvre les règles, les responsabilités et les accords juridiques qui régissent votre interaction avec AyoubSVT." ,
};
const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="flex p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Termes et conditions pour AyoubSVT{" "}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Dernière mise à jour : 07/11/2024

Veuillez lire attentivement ces conditions d'utilisation ("Conditions", "Conditions d'utilisation") avant d'utiliser le site web AyoubSVT.com (le "Service") exploité par AyoubSVT ("nous", "notre", "nos").

Votre accès et votre utilisation du Service sont conditionnés à votre acceptation et à votre conformité à ces Conditions. Ces Conditions s'appliquent à tous les visiteurs, utilisateurs et autres personnes qui accèdent ou utilisent le Service.

En accédant ou en utilisant le Service, vous acceptez d'être lié par ces Conditions. Si vous êtes en désaccord avec une partie quelconque des conditions, alors vous ne pouvez pas accéder au Service.

Comptes
Lorsque vous créez un compte auprès de nous, vous devez nous fournir des informations exactes, complètes et à jour en tout temps. Le non-respect de cette obligation constitue une violation des Conditions, ce qui peut entraîner la résiliation immédiate de votre compte sur notre Service.

Vous êtes responsable de protéger le mot de passe que vous utilisez pour accéder au Service et de toute activité ou action effectuée sous votre mot de passe, que votre mot de passe soit avec notre Service ou un service tiers.

Vous acceptez de ne pas divulguer votre mot de passe à des tiers. Vous devez nous avertir immédiatement dès que vous avez connaissance de toute violation de la sécurité ou de toute utilisation non autorisée de votre compte.

Propriété intellectuelle
Le Service et son contenu, ses fonctionnalités et sa fonctionnalité sont la propriété de AyoubSVT et sont protégés par les lois sur le droit d'auteur, les marques de commerce, les brevets et autres lois sur la propriété intellectuelle.

Liens vers d'autres sites Web
Notre Service peut contenir des liens vers des sites Web tiers ou des services qui ne sont pas détenus ou contrôlés par AyoubSVT.

AyoubSVT n'a aucun contrôle sur, et n'assume aucune responsabilité pour, le contenu, les politiques de confidentialité ou les pratiques de tout site Web tiers ou de tout service. Vous reconnaissez et acceptez que AyoubSVT ne sera pas responsable, directement ou indirectement, de tout dommage ou perte causé ou présumé être causé par ou en relation avec l'utilisation ou la dépendance à un tel contenu, biens ou services disponibles sur ou via ces sites Web ou services.

Nous vous conseillons vivement de lire les conditions générales et les politiques de confidentialité de tout site Web ou service tiers que vous visitez.

Résiliation
Nous pouvons résilier ou suspendre immédiatement votre compte et/ou votre accès au Service sans préavis ni responsabilité, pour quelque raison que ce soit, y compris, sans limitation, si vous violez les Conditions.

Droit applicable
Ces Conditions sont régies et interprétées conformément aux lois AyoubSVT. Notre incapacité à appliquer tout droit ou disposition de ces Conditions ne sera pas considérée comme une renonciation à ces droits. Si une disposition de ces Conditions est jugée invalide ou inapplicable par un tribunal, les dispositions restantes de ces Conditions resteront en vigueur.

Modifications
Nous nous réservons le droit, à notre seule discrétion, de modifier ou de remplacer ces Conditions à tout moment. Si une révision est importante, nous essaierons de fournir un préavis d'au moins 30 jours avant que les nouvelles conditions ne prennent effet. Ce qui constitue un changement important sera déterminé à notre seule discrétion.

Contactez-nous
Si vous avez des questions concernant ces Conditions, veuillez nous contacter à benhmiedayoub2@gmail.com.

En utilisant notre Service, vous acceptez d'être lié par ces Conditions.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
