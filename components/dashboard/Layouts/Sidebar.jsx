import React from "react";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SidebarData } from "./SidebarData/sidebarData";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const Sidebar = () => {
  return (
    <div className=" text-white h-screen w-14 bg-primLaboHov hidden md:block">
      {/* Sidebar content */}
      <Link href={"/dashboard"} className=" pointer-events-auto">
        <Image
          src={"/images/Labo/logo/labo-favicon.ico"}
          alt="Logo Of Labo"
          width={35}
          height={35}
          loading="lazy"
          className="mx-3 mt-3 mb-4"
        />
      </Link>
      <div className="items-center text-center max-w-5 grid ml-3 justify-center">
        {SidebarData.map((nav) => {
          return (
            <>
              <Link href={nav.linkTo} key={nav.id} className="bg-white hover:bg-[#e1e0ff] rounded-md text-primLaboHov w-8 text-center justify-center flex h-8 ml-3 mb-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>{nav.iconTag}</TooltipTrigger>
                    <TooltipContent>
                      <p>{nav.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </>
          );
        })}
      </div>
      <div className="absolute bottom-0 w-full  px-4 pb-2">
        <AlignJustify />
      </div>
    </div>
  );
};

export default Sidebar;
