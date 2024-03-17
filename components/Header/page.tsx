import { UserButton, auth } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

export default async function Header() {
  const { userId } = auth();

  return (
    <header>
      <div className="bg-transprant text-primaryho">
        <div className='container mx-auto flex items-center justify-between py-4 px-4'>
          <Link href='https://www.AyoubSVT.com/'>
            <Image
              src="/images/logos/header/header-logo.png"
              alt="logo"
              width={130}
              height={35}
              className="w-48"
            />
          </Link>
          {/* Show navbar links when screen width is greater than 1277px */}
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-0 ${'hidden lg:flex'}`} id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="https://www.AyoubSVT.com/" className="block py-2 px-3 md:p-0 text-primaryy md:hover:text-primaryho">ACCUEIL</a>
              </li>
              <li>
                <a href="/dashboard" className="block py-2 px-3 md:p-0 text-primaryy  md:hover:text-primaryho">VIRTULE-ZX10</a>
              </li>
              <li>
                <a href="#features" className="block py-2 px-3 md:p-0 text-primaryy md:hover:text-primaryho">NOS CARACTÉRISTIQUES</a>
              </li>
              <li>
                <a href="#about" className="block py-2 px-3 md:p-0 text-primaryy  md:hover:text-primaryho">À PROPOS</a>
              </li>
              <li>
                <a href="https://khabzox.github.io/ayoubsvt/html/Niveau-scolaire" className="block py-2 px-3 md:p-0 text-primaryy  md:hover:text-primaryho">TUTORIELS</a>
              </li>
              <li>
                <a href="#support" className="block py-2 px-3 md:p-0 text-primaryy  md:hover:text-primaryho">CONTACT</a>
              </li>
            </ul>
          </div>
          <div>
            {/* {userId ? (
              <div className='flex gap-4 items-center'>
                <Link href='/dashboard'>Dashboard</Link>
                <UserButton afterSignOutUrl='/' />
              </div>
            ) : (
              <div className='flex gap-4 items-baseline underline'>
                <Link href='/sign-up'>S&lsquo;inscrire</Link>
                <Link href='/sign-in'>
                  <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    S&lsquo;identifier
                  </button>
                </Link>
              </div>
            )} */}
              <div className='flex gap-4 items-baseline underline'>
                <Link href='/dashboard'>
                  <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Dashboard
                  </button>
                </Link>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
}
