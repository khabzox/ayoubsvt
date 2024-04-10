import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link"
import { Button } from "../ui/button"

export default async function BlogHeader() {
    const { userId } = auth();
  return (
    <header className="w-full border-b">
      <div className="container px-4 md:px-6">
        <div className="flex flex-row md:flex-row md:items-center items-center justify-between gap-4 h-16 md:h-20">
          <Link className="flex items-center gap-2" href="#">
            <FlagIcon className="h-6 w-6" />
            <span className="font-semibold">Acme Inc</span>
          </Link>
          <nav className="flex-1 justify-center hidden gap-4 md:flex">
            <Link className="font-medium" href="#">
              Dashboard
            </Link>
            <Link className="font-medium" href="#">
              Projects
            </Link>
            <Link className="font-medium" href="#">
              Team
            </Link>
            <Link className="font-medium" href="#">
              Calendar
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
            {userId ? (
              <div className='flex gap-4 items-center'>
                <UserButton afterSignOutUrl='/' />
              </div>
            ) : (
              <div className='flex gap-4 items-baseline underline'>
                <Link href='/dashboard' className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                    Dashboard
                </Link>
              </div>
            )}

            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function FlagIcon(props) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}