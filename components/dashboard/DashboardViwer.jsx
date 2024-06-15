import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="text-white max-h-[100vh] px-2 mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-secnd p-4 rounded-lg">
        <h2 className="font-bold text-lg mb-4">Collège</h2>
      </div>
      <div className="bg-secnd p-4 rounded-lg">
        <h2 className="font-bold text-lg mb-4">Vidéo - Lycée</h2>
      </div>
      <div className="bg-bgHov p-8 rounded-lg col-span-full">
        <h2 className="text-2xl font-bold mb-4 text-secnd">Title</h2>
        <p className="mb-2 text-[#5100b9] font-medium">Description</p>
      </div>
    </div>
  );
}
