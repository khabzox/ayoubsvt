import { collDirection } from "@/components/dashboard/Tutoriels/collDirection";
import Link from "next/link";
export default function tutorialsPageLevel() {
  return (
    <>
      <div className="h-[100vh]">
        {collDirection("3AC-BIOF")}
        <div className="flex md:text-xl">
          <div className="w-full p-4 costumMobileScrenn">
            <div className="bg-yellow-400 p-2 mb-4 rounded-md">
              <button className="bg-yellow-400 p-2 rounded-md">
                Sciences de la vie et de la terre pour la 3 année biof
              </button>
            </div>

            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
                <Link href={""}> 
              Résumés de 3ac Biof
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
