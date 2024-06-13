import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { titleDataCollege } from "./DataTutorials/titleDataCollege";
import { titleDataLycee } from "./DataTutorials/titleDataLycee";
import { titleDataCollegeVideo } from "./DataTutorials/titleDataCollegeVideo";
import { titleDataLyceeVideo } from "./DataTutorials/titleDataLyceeVideo";

export default function TutorielsDsignView() {
  const pText =
    "Rejoignez notre équipe de bénévoles chez AyoubSVT et contribuez à un avenir meilleur pour les étudiants ! Nous offrons des cours gratuits, des résumés et bien plus pour aider les jeunes à exceller académiquement. Votre soutien peut faire une grande différence. Ensemble, créons un environnement d'apprentissage plus bénéfique et accessible à tous.";
  const Title = "Engagez-vous pour un Environnement Éducatif Plus Sain !";
  return (
    <div className="text-white max-h-[75vh] px-2 mt-2">
      <div className="flex flex-wrap justify-between mb-8 gap-1">
        <div className="bg-secnd p-4 rounded-lg w-full sm:w-[48%] md:w-[24%] mb-4 sm:mb-0">
          <h2 className="font-bold text-lg mb-4">Collège</h2>
          <ul>
            {titleDataCollege.map((nav) => (
              <Link href={nav.link} key={nav.id}>
                <li className="flex items-center mb-2 hover:underline">
                  <BookIcon className="mr-2" />
                  {nav.text}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {/* Repeat the similar structure for other cards */}
        <div className="bg-secnd p-4 rounded-lg w-full sm:w-[48%] md:w-[24%] mb-4 sm:mb-0">
          <h2 className="font-bold text-lg mb-4">Lycée</h2>
          <ul>
            {titleDataLycee.map((nav) => (
              <Link href={nav.link} key={nav.id}>
                <li className="flex items-center mb-2 hover:underline">
                  <BookIcon className="mr-2" />
                  {nav.text}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {/* Repeat the similar structure for other cards */}
        <div className="bg-secnd p-4 rounded-lg w-full sm:w-[48%] md:w-[24%] mb-4 sm:mb-0">
          <h2 className="font-bold text-lg mb-4">Vidéo - Collège</h2>
          <ul>
            {titleDataCollegeVideo.map((nav) => (
              <Link href={nav.link} key={nav.id}>
                <li className="flex items-center mb-2 hover:underline">
                  <BookIcon className="mr-2" />
                  {nav.text}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {/* Repeat the similar structure for other cards */}
        <div className="bg-secnd p-4 rounded-lg w-full sm:w-[48%] md:w-[24%] mb-4 sm:mb-0">
          <h2 className="font-bold text-lg mb-4">Vidéo - Lycée</h2>
          <ul>
            {titleDataLyceeVideo.map((nav) => (
              <Link href={nav.link} key={nav.id}>
                <li className="flex items-center mb-2 hover:underline">
                  <BookIcon className="mr-2" />
                  {nav.text}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {/* Repeat for other cards */}
      </div>
      <div className="bg-bgHov p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-secnd">{Title}</h2>
        <p className="mb-8 text-[#5100b9] font-medium">{pText}</p>
        <form
          action="https://formbold.com/s/9xdAE"
          method="POST"
          className="flex"
        >
          <Input
            className="mr-4 bg-primLaboHov border-none outline-none hover:outline-none"
            placeholder="123@gmail.com"
            name="email"
            type="email"
          />
          <Button variant="outTheBox" type="submit">
            Envoye
          </Button>
        </form>
      </div>
    </div>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}
