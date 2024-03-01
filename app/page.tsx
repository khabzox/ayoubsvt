import Hero from '@/components/Hero/page';
import Levels from '@/components/Levels/page';
import Header from '@/components/Header/page';
import Feature from "@/components/Features/page";

export default function Home() {
  return (
    <main>
      <Header /> 
      <Hero />
      <Levels />
      <Feature />
    </main>
  );
} 