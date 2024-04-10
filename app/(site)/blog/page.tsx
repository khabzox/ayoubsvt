import Header from "../../../components/BlogHeader/page"
import Link from "next/link"

export default function Blog() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section>
        <div className="container px-4 md:px-6">
          <div className="grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start py-12 lg:py-24 xl:py-32">
            <div className="space-y-4">
              <div className="space-y-2">
                <Link
                  className="text-sm font-medium tracking-wide text-gray-500 uppercase transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  March 19, 2023
                </Link>
                <h1 className="text-3xl font-bold tracking-tighter lg:text-5xl xl:text-6xl/none">
                Étude de l'énergie renouvelable pour répondre aux besoins énergétiques mondiaux.
                </h1>
              </div>
              <div className="space-y-4 text-gray-500 dark:text-gray-400">
                <p>
                  Web components are a set of web platform APIs that allow you to create new custom, reusable,
                  encapsulated HTML tags to use in web pages and web apps.
                </p>
                <p>
                  In this comprehensive guide, we'll cover everything you need to know about web components, including
                  how to create and use them in your projects, best practices for building web components, and how web
                  components compare to other frontend frameworks like React, Vue, and Angular.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 min-w-[300px]">
              <img
                alt="Hero"
                className="aspect-video overflow-hidden rounded-xl object-bottom"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex items-center space-x-2">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="space-y-1">
                  <h4 className="font-semibold">Sarah Day</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Staff Writer at Acme Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Introducing Vercel UI: The Design System for the Web
                </h2>
                <p className="text-gray-500 dark:text-gray-400">Posted on June 23, 2023</p>
                <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We are excited to announce the launch of Vercel UI, the design system for the web. Vercel UI provides
                  a set of components and tools that enable developers to create beautiful, performant, and accessible
                  user interfaces.
                </p>
                <Link
                  className="inline-flex items-center underline underline-offset-2 hover:underline-underline-offset-2"
                  href="#"
                >
                  Continue Reading
                  <ChevronRightIcon className="w-4 h-4 ml-1 inline-block" />
                </Link>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Next.js 12: Faster Builds, Smaller Bundles, and a Better Developer Experience
                </h2>
                <p className="text-gray-500 dark:text-gray-400">Posted on June 23, 2023</p>
                <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We are excited to announce the launch of Vercel UI, the design system for the web. Vercel UI provides
                  a set of components and tools that enable developers to create beautiful, performant, and accessible
                  user interfaces.
                </p>
                <Link
                  className="inline-flex items-center underline underline-offset-2 hover:underline-underline-offset-2"
                  href="#"
                >
                  Continue Reading
                  <ChevronRightIcon className="w-4 h-4 ml-1 inline-block" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}