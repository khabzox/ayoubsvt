"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import { ButtonGrid1 } from "@/components/shared/ButtonGrid";
import { LinkShow } from "./Links/LinkShow";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

export default function Header() {
  const { userId } = useAuth();

  const [open, setOpen] = useState(false);
  function boxOpen() {
    setOpen((prev) => !prev);
  }
  return (
    <>
      <header>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="sr-only">Ayoubsvt</span>
                <Image
                  src={"/images/header-logo.png"}
                  alt="Logo of AyoubSVT"
                  width={130}
                  height={35}
                />
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm uppercase">
                  <LinkShow />
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">

              {userId ? (
              <div className='flex gap-4 items-center'>
                {/* <Link href='/dashboard'>Dashboard</Link> */}
                <UserButton afterSignOutUrl='/' />
              </div>
            ) : (
              <div className=" items-center sm:flex sm:gap-4">
                <Link href="/sign-in" className="text-prim font-medium">
                  Login
                </Link>

                <div className="hidden sm:flex">
                  {ButtonGrid1("/sign-up", "Register")}
                </div>
              </div>
            )}

              <div className="block md:hidden">
                <button
                  className="rounded bg-secndHov p-2 text-white"
                  onClick={boxOpen}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                {open && (
                  <div className={styles.mobileLinks}>
                    <LinkShow />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
