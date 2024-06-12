import { ButtonGrid1, ButtonGrid2 } from "@/components/shared/ButtonGrid";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section>
        <div className="flex items-center pt-8 px-4 mx-auto  text-center lg:pt-16 lg:px-12">
          <div className="HeroImg">
            <Image
              src={"/images/hero/3kl.png"}
              alt="Img of Hero"
              width={250}
              height={150}
            />
          </div>

          <div>
            <Link
              href="/dashboard"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm rounded-full "
            >
              <span className="text-xs bg-white rounded-full text-black px-4 py-1.5 mr-3">
                New
              </span>
              <span className="text-sm font-medium text-white">
                Virtual-ZX10 un Nouveau Labo
              </span>
              <svg
                className="ml-2 w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <h1 className="mb-4 text-4xl capitalize font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
              Tout ce qui touche <br /> aux sciences des{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
                SVT!
              </span>
            </h1>
            <p className="mb-8 text-lg font-normal text-primText lg:text-lg sm:px-16 xl:px-48">
              Un site Web complet pour vous aider à comprendre et étudier les
              sciences des SVT, Et également faciliter le transfert
              d&apos;informations de la manière la plus simple!
            </p>
            <div className="flex items-center justify-center mb-8 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              {ButtonGrid1("/dashboard", "COMMENCÉ")}
              {ButtonGrid2("https://youtu.be/22TuvwA7DpA?si=KtVdnn2Fo4cyCO1p", "VIDÉO")}
            </div>
          </div>

          <div className="HeroImg">
            <Image
              src={"/images/hero/lamp.png"}
              alt="Img of Hero"
              width={250}
              height={150}
            />
          </div>
        </div>
      </section>
    </>
  );
}
