import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AyoubSVT | blog",
    description: "hi",
    keywords: "ayoubsvt, www.ayoubsvt.com, ayoubsvt.com, ayoub svt, ayoubsvt, ayousvt, Prof ayoub, Prof ayoubsvt, Prof ayoub svt, dashboard",
    themeColor: "#9400FF",
};

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {children}
      </section>
    )
  }