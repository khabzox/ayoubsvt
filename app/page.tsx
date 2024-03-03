import Hero from '@/components/Hero/page';
import Levels from '@/components/Levels/page';
import Header from '@/components/Header/page';
import Feature from "@/components/Features/page";
import { LaboShow } from "@/components/LaboShow/page";
// import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo/page";
// <GoogleGeminiEffectDemo />
export default function Home() {
  return (
    <>
    <Header /> 
    <main>
      <Hero />
      <Levels />
      <Feature />
      <LaboShow />
    </main>
    </>
  );
} 