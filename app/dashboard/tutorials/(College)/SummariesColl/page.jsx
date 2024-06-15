import { collDirection } from "@/components/dashboard/Tutoriels/collDirection";
import Link from "next/link";
export default function tutorialsPageLevel() {
  return (
    <>
      <div className="h-[100vh]">
        {collDirection("Résumés")}
        <div className="flex md:text-xl">
          <div className="w-full p-4 costumMobileScrenn">
            <div className="bg-yellow-400 p-2 mb-4 rounded-md">
              <button className="bg-yellow-400 p-2 rounded-md">
                Tous les résumés importants
              </button>
            </div>

            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
                <Link
                  href={"https://heyzine.com/flip-book/343c53e617"}
                  target={"_blank"}
                >
                  Résumés de 3ac Biof ( modèle 1 )
                </Link>
              </div>
            </div>
            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
                <Link
                  href={"/data/TutorialsDocs/3AC-BIOF/SummariesColl-pdf.pdf"}
                  target={"_blank"}
                >
                  Résumés de 3ac Biof ( modèle 2 )
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
