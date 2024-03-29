"use client";
import PageContainer from '../../../../_components/container/PageContainer';
import Link from 'next/link';
import Image from 'next/image';
import SingleTuSC from "./SingleTutSC";
import brandData from "./TutorailData";
import { FolderIcon, HomeIcon, FoldersIcon, fileTypeIcon } from '../../../../_components/tutorials/iconset/page';
import StyleTutorials from '../../../../_components/StyleTutorials';
import React from "react";
import TutorailData from './TutorailData';

export default function SchoolLevel(props) {
  const { extension } = props;
  return (
    

    <PageContainer title="Tutoriels 1AC BIOF : Réactifs et Conviviaux" description="Explorez nos tutoriels conviviaux pour maîtriser 1AC BIOF, adaptés à tous les appareils. Que vous soyez novice ou expert, nos instructions claires vous guideront dans l'analyse des données biologiques." keywords={'ayoubsvt 1ac,ayoubsvt 1ac biof,ayoubsvt svt,1ac biof,math 1ac biof,svt 1ac biof,physique 1ac biof,math 1ac biof,svt 1ac biof,physique 1ac biof,maths 1ac biof exercices corrigés,alloschool 1ac biof,cours svt 1ac biof pdf,cours svt 1ac biof,examen math 1ac biof,maths 1ac biof exercices corrigés,alloschool 1ac biof,cours svt 1ac biof pdf,cours svt 1ac biof,examen math 1ac biof,pc1.ma 1ac biof,difference between ac1 and ac2,ebco innotech price,what is a 1ac blood test,what is a normal 1ac level,1ac levels,ac1 vs ac15,1ac blood test range,difference between xlpe and swa cable,difference between epr and xlpe cables,1ac math biof,what does ac1 measure,ac 1.5 pk berapa ampere,swa cable specification,bs en specifications,bio 1ac software download,swa cable size and current rating'}>
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
        <span className="text-gray-500">/ 1AC BIOF</span>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <FolderIcon />
          <span className="text-xl font-medium">
            Sciences de la vie et de la terre pour la 1 année biof
          </span>
        </div>
      </div>

    <div className='ml-2'>
    {TutorailData.map((TutorialSec, key) => (
              <SingleTuSC TutorialSec={TutorialSec} key={key} />
    ))}
    </div>
    </PageContainer>
  );
};
