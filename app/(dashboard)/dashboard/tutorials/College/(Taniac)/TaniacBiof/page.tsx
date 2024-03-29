"use client";
import PageContainer from '../../../../_components/container/PageContainer';
import Link from 'next/link';
import { FolderIcon, HomeIcon } from '../../../../_components/tutorials/iconset/page';
import StyleTutorials from '../../../../_components/StyleTutorials';
export default function SchoolLevel() {
  return (
    <PageContainer title="Tutoriels 2AC BIOF : Réactifs et Conviviaux" description="Explorez nos tutoriels conviviaux pour maîtriser 2AC BIOF, adaptés à tous les appareils. Que vous soyez novice ou expert, nos instructions claires vous guideront dans l'analyse des données biologiques." keywords={'ayoubsvt 2ac,ayoubsvt 2ac biof,ayoubsvt svt,2ac biof,math 2ac biof,svt 2ac biof,physique 2ac biof,math 2ac biof,svt 2ac biof,physique 2ac biof,maths 2ac biof exercices corrigés,alloschool 2ac biof,cours svt 2ac biof pdf,cours svt 2ac biof,examen math 2ac biof,maths 2ac biof exercices corrigés,alloschool 2ac biof,cours svt 2ac biof pdf,cours svt 2ac biof,examen math 2ac biof,pc1.ma 2ac biof,difference between ac1 and ac2,ebco innotech price,what is a 2ac blood test,what is a normal 2ac level,2ac levels,ac1 vs ac15,2ac blood test range,difference between xlpe and swa cable,difference between epr and xlpe cables,2ac math biof,what does ac1 measure,ac 2.5 pk berapa ampere,swa cable specification,bs en specifications,bio 2ac software download,swa cable size and current rating'}>
      <StyleTutorials />
      <div className="flex items-center space-x-2 mb-6">
        <Link href={'/dashboard'}>
        <HomeIcon className="text-gray-400" />
        </Link>
        <Link href={'/dashboard/tutorials/SchoolLevel'}>
        <span className="text-gray-500">/ Tutoriels</span>
        </Link>
        <Link href={'/dashboard/tutorials/College'}>
        <span className="text-gray-500">/ Collège</span>
        </Link>
        <span className="text-gray-500">/ 2AC BIOF</span>
      </div>
      <div className="space-y-4 ml-3">
        <div className="flex items-center space-x-3">
          <FolderIcon className="text-yellow-400" />
          <span className="text-xl font-medium">
            <Link href={'d'}>2AC BIOF</Link>
          </span>
        </div>
      </div>
    </PageContainer>
  );
};
