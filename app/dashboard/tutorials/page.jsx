import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import TutorielsDsignView from "@/components/dashboard/Tutoriels/TutorielsDsignView";
export const metadata = {
  title: "AyoubSVT | Tutoriels",
  description: "Tutoriels propose une large gamme de tutoriels couvrant divers sujets en sciences et sciences de la vie. Ces guides pas à pas sont conçus pour aider les apprenants de tous niveaux à comprendre des concepts complexes et à améliorer leurs compétences pratiques." ,
};
export default function Tutorials() {
  return (
    <>
      <Breadcrumb className="ml-2 mt-2" >
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard" className="hover:text-primLabo">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primLabo">Tutoriels</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <TutorielsDsignView />
    </>
  );
}
