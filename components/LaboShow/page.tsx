import React from "react";
import { LaboShowScroll } from "../ui/laboshow-scroll";
import Link from "next/link";
import Image from "next/image";

export function LaboShow() {
  return (
    <div className="overflow-hidden bg-white w-full hidden lg:block">
      <LaboShowScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        badge={
          <Link href="https://www.ayoubsvt.com/dashboard">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/images/readme-bk.png`}
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/images/logos/labo-favicon.ico"
      width="50"
      height="50"
      alt="hello"/>
  );
};
