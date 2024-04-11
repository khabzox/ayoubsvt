import Header from "../../../../../components/BlogHeader/page"
import Link from "next/link"
import Image from "next/image"
export default function Blog() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section>
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl grid-cols-1 items-center gap-10 lg:gap-16 py-12 lg:py-24 xl:py-32">
            <div className="space-y-4">
              <div className="space-y-2">
                <Link
                  className="text-sm font-medium tracking-wide text-gray-500 uppercase transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  19 MARS 2023
                </Link>
                <h1 className="text-3xl font-bold tracking-tighter lg:text-5xl xl:text-6xl/none hover:underline hover:text-primaryho">
                Nous devons nous renseigner sur les énergies renouvelables pour garantir que nous disposons de suffisamment d’énergie pour tous les habitants de la planète.
                </h1>
              </div>
              <div className="space-y-4 text-gray-500 dark:text-gray-400">
                <p>
                Nous avons besoin d’énergie pour tout ce que nous faisons, du chauffage de nos maisons au fonctionnement de nos usines en passant par la conduite de nos voitures. Mais nous devons trouver des moyens de consommer moins de pétrole et de gaz et de protéger la planète. Ainsi, la recherche sur l’énergie verte peut nous aider à obtenir suffisamment d’énergie sans nuire à l’environnement. Cette introduction examine comment de plus en plus de personnes utilisent des sources dénergie propres pour changer la façon dont nous alimentons le monde.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 min-w-[300px]">
              <Image
                alt="Hero"
                className="aspect-video overflow-hidden rounded-xl object-bottom mt-10 m-auto w-full"
                height="610"
                src="/images/BlogImages/2/img/1.jpg"
                width="1050"
              />
              {/* <div className="flex items-center space-x-2">
                <Image
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
              </div> */}
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
            <div className="grid gap-6 mt-6 lg:grid-cols-2 lg:gap-12">
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
            <div className="grid gap-6 mt-6 lg:grid-cols-2 lg:gap-12">
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