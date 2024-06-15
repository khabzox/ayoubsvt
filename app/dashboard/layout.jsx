import React from "react";
import Sidebar from "@/components/dashboard/Layouts/Sidebar";
import Header from "@/components/dashboard/Layouts/Header";

export const metadata = {
  title: "AyoubSVT | Dashboard",
  description: "AyoubSVT | Dashboard fournit une interface personnalisée où vous pouvez suivre vos progrès, gérer vos activités et accéder à toutes les ressources disponibles sur AyoubSVT. Personnalisez votre tableau de bord pour rester organisé et concentré sur vos objectifs d'apprentissage.",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex h-screen showScren">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="contentOfdashboard">{children}</div>
      </div>
    </div>
  );
}
