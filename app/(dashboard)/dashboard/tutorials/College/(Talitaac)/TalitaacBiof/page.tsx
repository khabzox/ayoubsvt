"use client";
import PageContainer from '../../../../_components/container/PageContainer';
import Link from 'next/link';
import StyleTutorials from '../../../../_components/StyleTutorials';
import { FolderIcon, HomeIcon } from '../../../../_components/tutorials/iconset/page';
export default function SchoolLevel() {
  return (
    <PageContainer title="Tutoriels 3AC BIOF : Réactifs et Conviviaux" description="Explorez nos tutoriels conviviaux pour maîtriser 3AC BIOF, adaptés à tous les appareils. Que vous soyez novice ou expert, nos instructions claires vous guideront dans l'analyse des données biologiques." keywords={'ayoubsvt 3ac,ayoubsvt 3ac biof,ayoubsvt svt,3ac biof,math 3ac biof,svt 3ac biof,physique 3ac biof,math 3ac biof,svt 3ac biof,physique 3ac biof,maths 3ac biof exercices corrigés,alloschool 3ac biof,cours svt 3ac biof pdf,cours svt 3ac biof,examen math 3ac biof,maths 3ac biof exercices corrigés,alloschool 3ac biof,cours svt 3ac biof pdf,cours svt 3ac biof,examen math 3ac biof,pc1.ma 3ac biof,difference between ac1 and ac3,ebco innotech price,what is a 3ac blood test,what is a normal 3ac level,3ac levels,ac1 vs ac15,3ac blood test range,difference between xlpe and swa cable,difference between epr and xlpe cables,3ac math biof,what does ac3 measure,ac 3.5 pk berapa ampere,swa cable specification,bs en specifications,bio 3ac software download,swa cable size and current rating'}>
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
        <span className="text-gray-500">/ 3AC BIOF</span>
      </div>
      <div className="space-y-4 ml-3">
        <div className="flex items-center space-x-3">
          <FolderIcon className="text-yellow-400" />
          <span className="text-xl font-medium">
            <Link href={'d'}>3AC BIOF</Link>
          </span>
        </div>
      </div>
    </PageContainer>
  );
};
