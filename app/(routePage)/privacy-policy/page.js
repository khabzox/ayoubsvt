import Link from "next/link";
export const metadata = {
  title: "AyoubSVT | Privacy Policy",
  description: "Privacy Policy décrit comment nous collectons, utilisons et protégeons vos informations personnelles. Nous nous engageons à respecter votre vie privée et à garantir que vos données sont traitées avec le plus grand soin et en toute sécurité." ,
};
const PrivacyPolicy = () => {
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
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for AyoubSVT{" "}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Dernière mise à jour : 06/11/2024

www.AyoubSVT.com (le "Site") s'engage à protéger et à respecter votre vie privée. Cette politique de confidentialité (la "Politique") décrit les types d'informations personnelles que nous collectons, la manière dont nous les utilisons, les situations dans lesquelles nous les partageons et vos choix concernant ces informations. Cette Politique s'applique aux informations que nous collectons lorsque vous utilisez notre Site. En utilisant le Site, vous acceptez les termes de cette Politique de confidentialité.

Informations que nous collectons
Nous collectons et traitons les informations suivantes vous concernant :

Informations que vous nous fournissez : Nous pouvons collecter des informations que vous nous fournissez lorsque vous interagissez avec le Site, telles que votre nom, votre adresse e-mail et d'autres informations que vous choisissez de nous fournir.

Informations collectées automatiquement : Lorsque vous utilisez le Site, nous pouvons collecter certaines informations automatiquement, telles que votre adresse IP, le type de navigateur que vous utilisez, votre fournisseur d'accès Internet, les pages que vous consultez sur notre Site et d'autres informations de ce type.

Utilisation des informations
Nous utilisons les informations collectées auprès de vous pour les finalités suivantes :

Fournir et gérer le Site, y compris pour répondre à vos demandes.
Améliorer et personnaliser votre expérience sur le Site.
Communiquer avec vous, notamment pour vous envoyer des informations concernant le Site et ses fonctionnalités, ainsi que des informations sur nos produits et services.
Prévenir les activités frauduleuses et assurer la sécurité du Site.
Partage des informations
Nous ne vendons pas, ne louons pas et ne partageons pas vos informations personnelles avec des tiers, sauf dans les circonstances suivantes :

Avec votre consentement.
Si nous sommes tenus de le faire par la loi ou dans le cadre d'une procédure judiciaire.
Pour protéger et défendre nos droits ou notre propriété.
Pour protéger la sécurité personnelle des utilisateurs du Site ou du public.
Vos choix
Vous pouvez choisir de ne pas nous fournir certaines informations, mais cela peut affecter votre utilisation du Site ou de certaines de ses fonctionnalités.

Conservation des données
Nous conservons vos informations personnelles aussi longtemps que nécessaire aux fins décrites dans cette Politique de confidentialité, sauf si une période de conservation plus longue est requise ou autorisée par la loi.

Sécurité des données
Nous prenons des mesures raisonnables pour protéger vos informations personnelles contre la perte, le vol, l'utilisation abusive et l'accès non autorisé, la divulgation, l'altération et la destruction.

Modifications de cette Politique de confidentialité
Nous pouvons mettre à jour cette Politique de confidentialité de temps à autre. Nous vous informerons de toute modification importante en affichant la nouvelle Politique de confidentialité sur cette page.

Contactez-nous
Si vous avez des questions ou des préoccupations concernant cette Politique de confidentialité, veuillez nous contacter à l'adresse suivante : benhmiedayoub2@gmail.com.

Consentement
En utilisant ce Site, vous consentez à notre Politique de confidentialité et acceptez ses conditions.

Version en français
En cas de conflit entre la version anglaise et la version en français de cette Politique de confidentialité, la version anglaise prévaudra.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
