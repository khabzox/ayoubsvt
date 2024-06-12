import { Suspense } from "react";
import Header from "@/components/HomePage/Header/header";
import Hero from "@/components/HomePage/Hero/hero";
import HeadAd from "@/components/HomePage/HeadAd/headAd";
import Levels from "@/components/HomePage/Levels/level";
export default function Home() {
  return (
    <>
      <HeadAd />
      {/* <Suspense> */}
      <Header />
      {/* </Suspense> */}
      <main className="mx-auto max-w-screen-xl ">
        <Hero />
        <Levels />
      </main>
    </>
  );
}