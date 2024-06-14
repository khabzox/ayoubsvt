import { collDirection } from "@/components/dashboard/Tutoriels/collDirection";
import Link from "next/link";
export default function tutorialsPageLevel() {
  return (
    <>
      <div className="h-[100vh]">
        {collDirection("1BAC-SX")}
        <div className="flex md:text-xl">
          <div className="w-full p-4 costumMobileScrenn">
            <div className="bg-yellow-400 p-2 mb-4 rounded-md">
              <button className="bg-yellow-400 p-2 rounded-md">
              Sciences de la vie et de la terre pour 1ère BAC Sciences Expérimentales
              </button>
            </div>

            <div className="text-white bg-prim font-bold p-2 mb-4 rounded-md">
              <button className="p-2 rounded-md">
              Unité 1 : Les phénomènes géologiques externes
              </button>
            </div>

            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
                {"Réalisation de la carte paléogéographique d'une région"}
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u1/1-R%C3%A9alisation%20de%20la%20carte%20pal%C3%A9og%C3%A9ographique%20d'une%20r%C3%A9gion/pdf1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {"Réalisation de la carte paléogéographique d'une région"}{" "}
                      ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u1/1-R%C3%A9alisation%20de%20la%20carte%20pal%C3%A9og%C3%A9ographique%20d'une%20r%C3%A9gion/pdf2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {"Réalisation de la carte paléogéographique d'une région"}{" "}
                      ( modèle 2 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u1/1-R%C3%A9alisation%20de%20la%20carte%20pal%C3%A9og%C3%A9ographique%20d'une%20r%C3%A9gion/pdf3.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {"Réalisation de la carte paléogéographique d'une région"}{" "}
                      ( modèle 3 )
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <h2 className="font-bold">Exercice pratique:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/test/u1/1-R%C3%A9alisation%20de%20la%20carte%20pal%C3%A9og%C3%A9ographique%20d'une%20r%C3%A9gion/pdf1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Exercice ( modèle 1 )
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
              {"Reconstitution de l'histoire géologique + carte géo"}
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u1/2-Reconstitution%20de%20l'histoire%20g%C3%A9ologique%20%20+%20carte%20g%C3%A9o/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
{"Reconstitution de l'histoire géologique + carte géo"} ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u1/2-Reconstitution%20de%20l'histoire%20g%C3%A9ologique%20%20+%20carte%20g%C3%A9o/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                     {"Reconstitution de l'histoire géologique + carte géo"} ( modèle 2 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u1/2-Reconstitution%20de%20l'histoire%20g%C3%A9ologique%20%20+%20carte%20g%C3%A9o/pdf1-3.pdf"
                      }
                      target="_blank"
                      download
                    >
                     {"Reconstitution de l'histoire géologique + carte géo"} ( modèle 3 )
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <h2 className="font-bold">Exercice pratique:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/test/u1/2-Reconstitution%20de%20l'histoire%20g%C3%A9ologique%20%20+%20carte%20g%C3%A9o/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Exercice ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/test/u1/2-Reconstitution%20de%20l'histoire%20g%C3%A9ologique%20%20+%20carte%20g%C3%A9o/pdf1-2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Exercice ( modèle 2 )
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-white bg-prim font-bold p-2 mb-4 rounded-md">
              <button className="p-2 rounded-md">
              {"Unité 2 : Production de la matière organique et flux d'énergie"}
              </button>
            </div>


            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
        {"Mécanisme d'absorption de l'eau et des sels minéraux chez les plantes"}
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u2/1-M%C3%A9canisme%20d'absorption%20de%20l'eau%20et%20des%20sels%20min%C3%A9raux%20chez%20les%20plantes/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
{"Mécanisme d'absorption de l'eau et des sels minéraux chez les plantes"} ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u2/1-M%C3%A9canisme%20d'absorption%20de%20l'eau%20et%20des%20sels%20min%C3%A9raux%20chez%20les%20plantes/pdf1-2.pdf"
                      }
                      target="_blank"
                      download
                    >
{"Mécanisme d'absorption de l'eau et des sels minéraux chez les plantes"} ( modèle 2 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u2/1-M%C3%A9canisme%20d'absorption%20de%20l'eau%20et%20des%20sels%20min%C3%A9raux%20chez%20les%20plantes/pdf1-3.pdf"
                      }
                      target="_blank"
                      download
                    >
                    {"Mécanisme d'absorption de l'eau et des sels minéraux chez les plantes"} ( modèle 3 )
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <h2 className="font-bold">Exercice pratique:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/test/u2/1-M%C3%A9canisme%20d'absorption%20de%20l'eau%20et%20des%20sels%20min%C3%A9raux%20chez%20les%20plantes/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Exercice ( modèle 1 )
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/test/u2/1-M%C3%A9canisme%20d'absorption%20de%20l'eau%20et%20des%20sels%20min%C3%A9raux%20chez%20les%20plantes/pdf1-2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Exercice ( modèle 2 )
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
              Les échanges gazeux chlorophylliens
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u2/2-Les%20%C3%A9changes%20gazeux%20chlorophylliens/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Les échanges gazeux chlorophylliens ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u2/2-Les%20%C3%A9changes%20gazeux%20chlorophylliens/pdf1-2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Les échanges gazeux chlorophylliens ( modèle 2 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u2/2-Les%20%C3%A9changes%20gazeux%20chlorophylliens/pdf1-3.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Les échanges gazeux chlorophylliens ( modèle 3 )
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
              Production de la matiére organiques par les plantes
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u2/3-Production%20de%20la%20mati%C3%A9re%20organiques%20par%20les%20plantes/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Production de la matiére organiques par les plantes ( modèle 1 )
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u2/3-Production%20de%20la%20mati%C3%A9re%20organiques%20par%20les%20plantes/pdf1-2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Production de la matiére organiques par les plantes ( modèle 2 )
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u2/3-Production%20de%20la%20mati%C3%A9re%20organiques%20par%20les%20plantes/pdf1-3.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Production de la matiére organiques par les plantes ( modèle 3 )
                    </Link>
                  </li>
                </ul>
              </div>
            </div>


            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
              {"Rôle des pigements chlorophylliens dans la captation de l'énergie"}
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u2/4-R%C3%B4le%20des%20pigements%20chlorophylliens%20dans%20la%20captation%20de%20l'%C3%A9nergie/pdf1-3.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {"Rôle des pigements chlorophylliens dans la captation de l'énergie"} ( modèle 1 )
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u2/4-R%C3%B4le%20des%20pigements%20chlorophylliens%20dans%20la%20captation%20de%20l'%C3%A9nergie/pdf1-2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {"Rôle des pigements chlorophylliens dans la captation de l'énergie"} ( modèle 2 )
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u2/4-R%C3%B4le%20des%20pigements%20chlorophylliens%20dans%20la%20captation%20de%20l'%C3%A9nergie/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {"Rôle des pigements chlorophylliens dans la captation de l'énergie"} ( modèle 3 )
                    </Link>
                  </li>
                </ul>
              </div>
            </div>


            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
              Les principes réaction de la photosynthèse
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u2/5-les%20principes%20r%C3%A9action%20de%20la%20photosynth%C3%A8se/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Les principes réaction de la photosynthèse ( modèle 1 )
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u2/5-les%20principes%20r%C3%A9action%20de%20la%20photosynth%C3%A8se/pdf1-2.pdf"
                      }
                      target="_blank"
                      download
                    >
              Les principes réaction de la photosynthèse ( modèle 2 )
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u2/5-les%20principes%20r%C3%A9action%20de%20la%20photosynth%C3%A8se/pdf1-3.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Les principes réaction de la photosynthèse ( modèle 3 )
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <h2 className="font-bold">Exercice pratique:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/test/u2/5-les%20principes%20r%C3%A9action%20de%20la%20photosynth%C3%A8se/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Exercice ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/test/u2/5-les%20principes%20r%C3%A9action%20de%20la%20photosynth%C3%A8se/pdf1-2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Exercice ( modèle 2 )
                    </Link>
                  </li>
                </ul>
              </div>
            </div>


            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
              {"Diversité des sources de la matiére et de l'énergie utilisées par les êtres vivants"}
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u2/6-Diversit%C3%A9%20des%20sources%20de%20la%20mati%C3%A9re%20et%20de%20l'%C3%A9nergie%20utilis%C3%A9es%20par%20les%20%C3%AAtres%20vivants/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {"Diversité des sources de la matiére et de l'énergie utilisées par les êtres vivants"} ( modèle 1 )
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u2/6-Diversit%C3%A9%20des%20sources%20de%20la%20mati%C3%A9re%20et%20de%20l'%C3%A9nergie%20utilis%C3%A9es%20par%20les%20%C3%AAtres%20vivants/pdf1-2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {"Diversité des sources de la matiére et de l'énergie utilisées par les êtres vivants"} ( modèle 2 )
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u2/6-Diversit%C3%A9%20des%20sources%20de%20la%20mati%C3%A9re%20et%20de%20l'%C3%A9nergie%20utilis%C3%A9es%20par%20les%20%C3%AAtres%20vivants/pdf1-3.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {"Diversité des sources de la matiére et de l'énergie utilisées par les êtres vivants"}    ( modèle 3 )
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
                Contrôle Semester 1
              </div>
              <div>
                <h2 className="font-bold">Contrôle N°1:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/exam/s1/1/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Contrôle ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/exam/s1/1/pdf1-2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Contrôle ( modèle 2 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/exam/s1/1/pdf1-3.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Contrôle ( modèle 3 )
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <h2 className="font-bold">Contrôle N°2:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/exam/s1/2/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Contrôle ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/exam/s1/2/pdf1-2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Contrôle ( modèle 2 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                       "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/exam/s1/2/pdf1-3.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Contrôle ( modèle 3 )
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <h2 className="font-bold">Contrôle N°3:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/exam/s1/3/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Contrôle ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/exam/s1/3/pdf1-2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Contrôle ( modèle 2 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/exam/s1/3/pdf1-3.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Contrôle ( modèle 3 )
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-white bg-prim font-bold p-2 mb-4 rounded-md">
              <button className="p-2 rounded-md">
              Unité 3 : Les communications hormonale et nerveuse
              </button>
            </div>

            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
              La communication hormonale
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u3/1-La%20communication%20hormonale/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      La communication hormonale ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u3/1-La%20communication%20hormonale/pdf1-2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      La communication hormonale ( modèle 2 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u3/1-La%20communication%20hormonale/pdf1-3.pdf"
                      }
                      target="_blank"
                      download
                    >
                      La communication hormonale ( modèle 2 )
                    </Link>
                  </li>
                </ul>
              </div>
 
            </div>

            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
              La régulation de la glycémie
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u3/2-La%20r%C3%A9gulation%20de%20la%20glyc%C3%A9mie/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      La régulation de la glycémie ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u3/2-La%20r%C3%A9gulation%20de%20la%20glyc%C3%A9mie/pdf1-2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      La régulation de la glycémie ( modèle 2 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u3/2-La%20r%C3%A9gulation%20de%20la%20glyc%C3%A9mie/pdf1-4.pdf"
                      }
                      target="_blank"
                      download
                    >
                      La régulation de la glycémie ( modèle 3 )
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
              La communication nerveuse
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u3/3-la%20communication%20nerveuse/pdf1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      La communication nerveuse ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u3/3-la%20communication%20nerveuse/pdf2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      La communication nerveuse ( modèle 2 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u3/3-la%20communication%20nerveuse/pdf3.pdf"
                      }
                      target="_blank"
                      download
                    >
                      La communication nerveuse ( modèle 3 )
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <h2 className="font-bold">Exercice pratique:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/test/u3/3-la%20communication%20nerveuse/pdf1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Exercice ( modèle 1 )
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-white bg-prim font-bold p-2 mb-4 rounded-md">
              <button className="p-2 rounded-md">
              {"Unité 4 : L'intégration neuro-hormonale"}
              </button>
            </div>


            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
              La communication nerveuse
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u3/3-la%20communication%20nerveuse/pdf1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      La communication nerveuse ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u3/3-la%20communication%20nerveuse/pdf2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      La communication nerveuse ( modèle 2 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u3/3-la%20communication%20nerveuse/pdf3.pdf"
                      }
                      target="_blank"
                      download
                    >
                      La communication nerveuse ( modèle 3 )
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <h2 className="font-bold">Exercice pratique:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/test/u3/3-la%20communication%20nerveuse/pdf1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Exercice ( modèle 1 )
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
              {"Régulation de la reproduction chez l'homme"}
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u4/1-R%C3%A9gulation%20de%20la%20reproduction%20chez%20l'homme/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {"Régulation de la reproduction chez l'homme"} ( modèle 1 )
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
             {"L'intégration neuro-hormonale"}
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/course/u4/2-L'int%C3%A9gration%20neuro-hormonale/pdf1-1.png"
                      }
                      target="_blank"
                      download
                    >
                      {"L'intégration neuro-hormonale"} ( modèle 1 )
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
                Contrôle Semester 2
              </div>
              <div>
                <h2 className="font-bold">Contrôle N°1:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/exam/s2/1/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Contrôle ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/exam/s2/1/pdf1-2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Contrôle ( modèle 2 )
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <h2 className="font-bold">Contrôle N°2:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/exam/s2/2/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Contrôle ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/exam/s2/2/pdf1-2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Contrôle ( modèle 2 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/exam/s2/2/pdf1-3.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Contrôle ( modèle 2 )
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <h2 className="font-bold">Contrôle N°3:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SE/exam/s2/3/pdf1-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Contrôle ( modèle 1 )
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="fixed h-screen right-0">
          <div className="w-2/3 p-2 border border-purple-700 h-screen wOfAdsBox">
            <div className="p-2 border-b border-purple-700">
              Exercice ( modèle 1 )
            </div>
            <div className="p-2">  hello </div>
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
}