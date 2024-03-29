clerk
Auth nextjs



Following are the mandatory Factors for Adsense Approval:-

 ===> Top-Level Domain is Mandatory Like .com, .net, .in, .org, e.t.c
 ===> Privacy-Policy, Contact Us, About Us, Disclaimer, Term of Condition pages are mandatory.
 ===> Minimum 15–20 Articles have to be Published on site.
 ===> All the Articles have to Unique.
 ===> No Copyrighted Content or image is used in the blog post.
 ===> Decent Traffic.
 ===> Apply only for the Domain, not for the Subdomain.
 ===> Apply only for the Blogging Website.





<!-- Google tag (gtag.js) -->
<script src="https://www.googletagmanager.com/gtag/js?id=G-5SCWKBPXMH"async></script>
<script>function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-5SCWKBPXMH")</script>
<script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4744380504125119"crossorigin="anonymous"async></script>







"use client";
import PageContainer from '../../../../_components/container/PageContainer';
import Link from 'next/link';
import Image from 'next/image';
import { FolderIcon, HomeIcon, FoldersIcon, fileTypeIcon } from '../../../../_components/tutorials/iconset/page';
import StyleTutorials from '../../../../_components/StyleTutorials';

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
    <div className="space-y-4 mt-3">
        <div className="flex items-center space-x-3">
          <FoldersIcon />
          <span className="text-xl font-medium">
             L'exploration des milieux naturels
          </span>
        </div>
      </div>

      <div className="space-y-4 mt-3">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium">
            Leçon:
          </span>
        </div>  
      </div>

    <div className="space-y-4 mt-3">
        <div className="flex items-center space-x-3">
          <Image 
          src={'/images/laboImages/tutoriels/icon/img.png'}
          height={24}
          width={24}
          alt='hi'
          />
          <span className="text-sm font-medium">
          L'exploration des milieux naturels ( modèle 1 )
          </span>
        </div>
      </div>


      <div className="space-y-4 mt-3">
        <div className="flex items-center space-x-3">
          <Image 
          src={'/images/laboImages/tutoriels/icon/img.png'}
          height={24}
          width={24}
          alt='hi'
          />
          <span className="text-sm font-medium">
          L'exploration des milieux naturels ( modèle 1 )
          </span>
        </div>
      </div>


      <div className="space-y-4 mt-3">
        <div className="flex items-center space-x-3">
          <Image 
          src={'/images/laboImages/tutoriels/icon/img.png'}
          height={24}
          width={24}
          alt='hi'
          />
          <span className="text-sm font-medium">
          L'exploration des milieux naturels ( modèle 1 )
          </span>
        </div>
      </div>


      <div className="space-y-4 mt-3">
        <div className="flex items-center space-x-3">
          <Image 
          src={'/images/laboImages/tutoriels/icon/img.png'}
          height={24}
          width={24}
          alt='hi'
          />
          <span className="text-sm font-medium">
          L'exploration des milieux naturels ( modèle 1 )
          </span>
        </div>
      </div>

      
    </div>
    </PageContainer>
  );
};
