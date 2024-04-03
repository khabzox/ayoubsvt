import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TutorialSec } from "../../../../../../../types/TutorialSec";
import { motion } from "framer-motion";
import { FolderIcon, HomeIcon, FoldersIcon, fileTypeIcon } from '../../../../_components/tutorials/iconset/page';


const SingleTuSC = ({ TutorialSec }: { TutorialSec: TutorialSec }) => {
  const { title, SrcFileType, name, hrafDO, module1, module2, module3, module4, ex1, ex2, ex3} = TutorialSec;

  return (
    <>
        <div className="space-y-4 mt-3">
        <div className="flex items-center space-x-3">
          <FoldersIcon />
          <span className="text-xl font-medium">
            {title}
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
          src={SrcFileType}
          height={24}
          width={24}
          alt={name}
          />
          <span className="text-sm font-medium">
          <Link href={hrafDO} download>
             {module1}
            </Link>
          </span>
        </div>
      </div>

      <div className="space-y-4 mt-3">
        <div className="flex items-center space-x-3">
          <Image 
          src={SrcFileType}
          height={24}
          width={24}
          alt={name}
          />
          <span className="text-sm font-medium">
          <Link href={hrafDO} download>
             {module2}
            </Link>
          </span>
        </div>
      </div>

      <div className="space-y-4 mt-3">
        <div className="flex items-center space-x-3">
          <Image 
          src={SrcFileType}
          height={24}
          width={24}
          alt={name}
          />
          <span className="text-sm font-medium">
          <Link href={hrafDO} download>
             {module3}
            </Link>
          </span>
        </div>
      </div>

      <div className="space-y-4 mt-3">
        <div className="flex items-center space-x-3">
          <Image 
          src={SrcFileType}
          height={24}
          width={24}
          alt={name}
          />
          <span className="text-sm font-medium">
          <Link href={hrafDO} download>
             {module4}
            </Link>
          </span>
        </div>
      </div>

      
      <div className="space-y-4 mt-3">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium">
            Exercice pratique:
          </span>
        </div>  
      </div>

      <div className="space-y-4 mt-3">
        <div className="flex items-center space-x-3">
          <Image 
          src={SrcFileType}
          height={24}
          width={24}
          alt={name}
          />
          <span className="text-sm font-medium">
            <Link href={hrafDO} download>
             {ex1}
            </Link>
          </span>
        </div>
      </div>

      <div className="space-y-4 mt-3">
        <div className="flex items-center space-x-3">
          <Image 
          src={SrcFileType}
          height={24}
          width={24}
          alt={name}
          />
          <span className="text-sm font-medium">
            <Link href={hrafDO} download>
             {ex2}
            </Link>
          </span>
        </div>
      </div>

      <div className="space-y-4 mt-3">
        <div className="flex items-center space-x-3">
          <Image 
          src={SrcFileType}
          height={24}
          width={24}
          alt={name}
          />
          <span className="text-sm font-medium">
            <Link href={hrafDO} download>
             {ex3}
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default SingleTuSC;
