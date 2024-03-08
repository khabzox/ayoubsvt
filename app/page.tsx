import Hero from '@/components/Hero/page';
import Levels from '@/components/Levels/page';
import Header from '@/components/Header/page';
import Feature from "@/components/Features/page";
import { LaboShow } from "@/components/LaboShow/page";
import Image from 'next/image';
// import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo/page";
// <GoogleGeminiEffectDemo />
export default function Home() {
  return (
    <>
    <div className='text-center mt-64'>
      <img src='./favicon.ico' height={90} width={90} className='inline-flex'></img>
      <h1 className='mt-5'>En cours de reconstruction...</h1>
    </div>
    {/* <Header /> 
    <main>
      <Hero />
      <Levels />
      <Feature />
      <LaboShow />
    </main> */}
    </>
  );
} 