import { collDirection } from "./collDirection";
import Link from "next/link";
export function ChooseDivisionOf2Bac(path, prop1, prop2, prop3) {
  return (
    <>
      <div className="h-[100vh]">
        {collDirection(path)}
        <div className="flex md:text-xl">
          <div className="w-full p-4 costumMobileScrenn">
            <div className="bg-yellow-400 p-2 mb-4 rounded-md">
              <button className="bg-yellow-400 p-2 rounded-md">
                Choisissez votre division
              </button>
            </div>

            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
                <Link href={"/dashboard/tutorials/1BAC-SM"}>
                  {prop1}
                </Link>
              </div>
            </div>

            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
                <Link href={"/dashboard/tutorials/1BAC-SX"}>
                  {prop2}
                </Link>
              </div>
            </div>

            <div className="mb-5">
              <div className="bg-purple-700 text-white p-2 mb-4 rounded-md">
                <Link href={"/dashboard/tutorials/1BAC-SX"}>
                  {prop3}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
