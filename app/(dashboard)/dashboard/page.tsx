import { auth, currentUser } from '@clerk/nextjs';
import WelDashboard from "@/components/WelDashboard/page";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
    title: "Virtual-ZX10 | Labo",
    description: "This is Next.js Home for TailAdmin Dashboard Template",
  };


export default async function DashboardPage() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }

  return (
        <>
          <DefaultLayout >
            <WelDashboard />
          </DefaultLayout>
        </>
  );
}