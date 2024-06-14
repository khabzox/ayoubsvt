import { collDirection } from "@/components/dashboard/Tutoriels/collDirection";
import Link from "next/link";
export default function tutorialsPageLevel() {
  return (
    <>
      <div className="h-[100vh]">
        {collDirection("1BAC-SM")}
        <div className="flex md:text-xl">
          <div className="w-full p-4 costumMobileScrenn">
            <div className="bg-yellow-400 p-2 mb-4 rounded-md">
              <button className="bg-yellow-400 p-2 rounded-md">
                Sciences de la vie et de la terre pour 1ère BAC Sciences
                Mathématiques
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
                {
                  "Les principes stratigraphiques et l’établissement de l’échelle stratigraphique"
                }
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u1/2-Les%20principes%20stratigraphiques%20et%20l%E2%80%99%C3%A9tablissement%20de%20l%E2%80%99%C3%A9chelle%20stratigraphique/pdf1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {
                        "Les principes stratigraphiques et l’établissement de l’échelle stratigraphique"
                      }{" "}
                      ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u1/2-Les%20principes%20stratigraphiques%20et%20l%E2%80%99%C3%A9tablissement%20de%20l%E2%80%99%C3%A9chelle%20stratigraphique/pdf2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {
                        "Les principes stratigraphiques et l’établissement de l’échelle stratigraphique"
                      }{" "}
                      ( modèle 2 )
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
                {
                  "La carte géologique et la reconstitution de l’histoire géologique d’une région donnée"
                }
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u1/3-La%20carte%20g%C3%A9ologique%20et%20la%20reconstitution%20de%20l%E2%80%99histoire%20g%C3%A9ologique%20d%E2%80%99une%20r%C3%A9gion%20donn%C3%A9e/pdf1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {
                        "La carte géologique et la reconstitution de l’histoire géologique d’une région donnée"
                      }{" "}
                      ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u1/3-La%20carte%20g%C3%A9ologique%20et%20la%20reconstitution%20de%20l%E2%80%99histoire%20g%C3%A9ologique%20d%E2%80%99une%20r%C3%A9gion%20donn%C3%A9e/pdf2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {
                        "La carte géologique et la reconstitution de l’histoire géologique d’une région donnée"
                      }{" "}
                      ( modèle 2 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u1/3-La%20carte%20g%C3%A9ologique%20et%20la%20reconstitution%20de%20l%E2%80%99histoire%20g%C3%A9ologique%20d%E2%80%99une%20r%C3%A9gion%20donn%C3%A9e/pdf3.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {
                        "La carte géologique et la reconstitution de l’histoire géologique d’une région donnée"
                      }{" "}
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
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/test/u1/3-La%20carte%20g%C3%A9ologique%20et%20la%20reconstitution%20de%20l%E2%80%99histoire%20g%C3%A9ologique%20d%E2%80%99une%20r%C3%A9gion%20donn%C3%A9e/pdf1.pdf"
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
                La sédimentation et les milieux sédimentaires
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u1/4-La%20s%C3%A9dimentation%20et%20les%20milieux%20s%C3%A9dimentaires/pdf1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      La sédimentation et les milieux sédimentaires ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u1/4-La%20s%C3%A9dimentation%20et%20les%20milieux%20s%C3%A9dimentaires/pdf2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      La sédimentation et les milieux sédimentaires ( modèle 2 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u1/4-La%20s%C3%A9dimentation%20et%20les%20milieux%20s%C3%A9dimentaires/pdf3.pdf"
                      }
                      target="_blank"
                      download
                    >
                      La sédimentation et les milieux sédimentaires ( modèle 3 )
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
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/test/u1/4-La%20s%C3%A9dimentation%20et%20les%20milieux%20s%C3%A9dimentaires/pdf1.pdf"
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
                {"Intérêt et méthodes d'étude des sédiments"}
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u1/5-Int%C3%A9r%C3%AAt%20et%20m%C3%A9thodes%20d''%C3%A9tude%20des%20s%C3%A9diments/pdf1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {"Intérêt et méthodes d'étude des sédiments"} ( modèle 1 )
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
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/test/u1/5-Int%C3%A9r%C3%AAt%20et%20m%C3%A9thodes%20d''%C3%A9tude%20des%20s%C3%A9diments/pdf1.pdf"
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
                Contrôle Semester 1
              </div>
              <div>
                <h2 className="font-bold">Contrôle N°1:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/exam/s1/1/pdf1.pdf"
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
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/exam/s1/1/pdf2.pdf"
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
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/exam/s1/1/pdf3.pdf"
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
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/exam/s1/2/pdf1.pdf"
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
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/exam/s1/2/pdf2.pdf"
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
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/exam/s1/2/pdf3.pdf"
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
                {
                  "Unité 2 : Nature et mécanisme de l’expression du matériel génétique - Génie génétique"
                }
              </button>
            </div>

            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
                {"Nature de l’information génétique"}
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u2/1-Nature%20de%20l%E2%80%99information%20g%C3%A9n%C3%A9tique/pdf1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {"Nature de l’information génétique"} ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u2/1-Nature%20de%20l%E2%80%99information%20g%C3%A9n%C3%A9tique/pdf2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {"Nature de l’information génétique"} ( modèle 2 )
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
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/test/u2/1-Nature%20de%20l%E2%80%99information%20g%C3%A9n%C3%A9tique/pdf1.pdf"
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
                {"Expression de l’information génétique"}
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/svt%201AC-1AC%20biof/1AC-biof/coure/pdf7-1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {"Expression de l’information génétique"} ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u2/2-Expression%20de%20l%E2%80%99information%20g%C3%A9n%C3%A9tique/pdf1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {"Expression de l’information génétique"} ( modèle 2 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u2/2-Expression%20de%20l%E2%80%99information%20g%C3%A9n%C3%A9tique/pdf2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      {"Expression de l’information génétique"} ( modèle 3 )
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
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u2/2-Expression%20de%20l%E2%80%99information%20g%C3%A9n%C3%A9tique/pdf3.pdf"
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
                Génie génétique
              </div>
              <div>
                <h2 className="font-bold">Leçon:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u2/3-G%C3%A9nie%20g%C3%A9n%C3%A9tique/pdf1-m1.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Génie génétique ( modèle 1 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u2/3-G%C3%A9nie%20g%C3%A9n%C3%A9tique/pdf1-m2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Génie génétique ( modèle 2 )
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/course/u2/3-G%C3%A9nie%20g%C3%A9n%C3%A9tique/pdf1-m3.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Génie génétique ( modèle 3 )
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
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/test/u2/3-G%C3%A9nie%20g%C3%A9n%C3%A9tique/pdf1.pdf"
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
                Contrôle Semester 1
              </div>
              <div>
                <h2 className="font-bold">Contrôle N°1:</h2>
                <ul className="ml-4">
                  <li>
                    <Link
                      className="hover:underline hover:text-prim"
                      href={
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/exam/s2/1/pdf1.pdf"
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
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/exam/s2/1/pdf2.pdf"
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
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/exam/s2/2/pdf1.pdf"
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
                        "https://khabzox.github.io/ayoubsvt/file/1bac/1bac-SM/exam/s2/2/pdf2.pdf"
                      }
                      target="_blank"
                      download
                    >
                      Contrôle ( modèle 2 )
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
