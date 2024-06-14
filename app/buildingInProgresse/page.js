"use client";
import { CodeXml } from "lucide-react";
import { GoBackButton } from '@/components/GoBackButton';
export default function buildingInProgresse() {

  return (  
    <>
      <div className="flex justify-center mt-[40vh] text-center items-center">
        <div className="text-center">
          <div className="bg-secnd p-4 text-white max-w-14 rounded inline-block hover:bg-[#7E19FF]">
            <CodeXml />
          </div>
          <h2 className="font-bold">
            Cette page sera bientôt disponible. <br /> Nous travaillons dur pour
            le rendre disponible le plus rapidement possible
          </h2>
          {GoBackButton("Retourner >")}
        </div>
      </div>
    </>
  );
}
