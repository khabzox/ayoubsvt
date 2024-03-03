"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarLinkGroup from "./SidebarLinkGroup";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`text-light absolute left-0 top-0 z-10 flex h-screen w-72.5 flex-col overflow-y-hidden bg-labobg duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/dashboard">
          <Image
            width={45}
            height={45}
            src={"/images/logos/labo-favicon.ico"}
            alt="Logo"
            priority
     //       className="bg-light px-1 py-1 rounded-lg"
          />
          
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-4 px-4 py-1 lg:mt-9 lg:px-4">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
             MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("dashboard")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/dashboard"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === "/" ||
                            pathname.includes("dashboard")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                            fill=""
                          />
                          <path
                            d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                            fill=""
                          />
                          <path
                            d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                            fill=""
                          />
                          <path
                            d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                            fill=""
                          />
                        </svg>
                        Dashboard
                      </Link>
                      {/* <!-- Dropdown Menu Start --> 
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/" && "text-white"
                              }`}
                            >
                              welcomepage
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Dashboard --> */}

            {/* <!-- Menu Item Tutoriels --> */}
              <li>
                <Link
                  href="/tutoriels"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                <svg xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                      width="18"
                      height="18" 
                      viewBox="0 0 512 512"
                      fill="none">
                    <path xmlns="http://www.w3.org/2000/svg" fill="var(--ci-primary-color, currentColor)" d="M101.667,400H464V16H100.667A60.863,60.863,0,0,0,40,76.667V430.25h.011c0,.151-.011.3-.011.453,0,35.4,27.782,65.3,60.667,65.3H464V464H100.667C85.664,464,72,448.129,72,430.7,72,414.06,85.585,400,101.667,400ZM360,48.333V221.149l-48.4-42.49L264,220.9V48.333ZM232,48V264h31.641l48.075-42.659L360.305,264H392V48h40V368H136.08L136,48ZM100.667,48H104l.076,320h-2.413A59.793,59.793,0,0,0,72,375.883V76.917A28.825,28.825,0,0,1,100.667,48Z" className="ci-primary"/>
                </svg>
                  Tutoriels
                </Link>
              </li>

              {/* <!-- Menu Item Tutoriels --> */}

              {/* <!-- Menu Item Laboratoire --> */}
               <li>
                <Link
                  href="/laboratoire"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("settings") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg 
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg" 
                  //xmlns:xlink="http://www.w3.org/1999/xlink" 
                  fill="none" 
                  height="18" 
                  width="19" 
                  version="1.1" 
                  id="Capa_1" 
                  viewBox="0 0 612 612" 
                  //xml:space="preserve"
                  >
                  <g>
                    <g>
                      <circle cx="306" cy="306.211" r="62.185"/>
                      <path d="M534.101,337.23c-7.888-10.304-16.733-20.673-26.417-31.019c9.685-10.345,18.529-20.714,26.417-31.019    c18.542-24.221,31.031-47.054,37.122-67.866c4.9-16.74,7.995-41.128-5.084-62.243c-17.681-28.546-53.763-34.538-80.918-34.538    c-22.832,0-48.908,4.001-76.949,11.542c-2.767-9.134-5.748-17.92-8.945-26.293c-10.877-28.487-23.747-51.157-38.253-67.276    C344.346,9.932,325.123,0,305.483,0h-0.126c-24.837,0-43.908,15.665-55.532,28.67c-14.452,16.167-27.239,38.936-38.007,67.475    c-3.102,8.221-5.992,16.838-8.677,25.787c-27.819-7.438-53.689-11.383-76.362-11.383c-27.156,0-63.238,5.995-80.918,34.541    c-13.078,21.115-9.984,45.51-5.084,62.25c6.091,20.812,18.581,43.66,37.122,67.88c7.884,10.298,16.723,20.664,26.402,31.005    c-9.679,10.339-18.518,20.703-26.402,31.001c-18.541,24.221-31.031,47.054-37.122,67.866c-4.899,16.74-7.995,41.128,5.084,62.243    c17.681,28.546,53.763,34.538,80.918,34.538c22.841,0,48.926-4.005,76.98-11.55c2.759,9.096,5.729,17.847,8.915,26.191    c10.876,28.486,23.747,51.05,38.252,67.169C267.652,602.272,286.874,612,306.513,612h0.13c24.838,0,43.908-15.468,55.533-28.472    c14.452-16.167,27.239-38.739,38.006-67.278c3.087-8.184,5.965-16.76,8.641-25.667c27.831,7.453,53.715,11.409,76.398,11.409    c0.003,0,0.003,0,0.006,0c27.154,0,63.233-6.052,80.912-34.596c13.078-21.115,9.984-45.56,5.084-62.301    C565.133,384.283,552.643,361.451,534.101,337.23z M485.221,145.319c14.999,0,41.615,2.348,51.357,18.075    c11.01,17.776-0.237,51.668-30.087,90.661c-7.007,9.153-14.857,18.377-23.438,27.598c-16.209-15.153-34.084-30.093-53.288-44.532    c-2.646-28.615-6.9-55.991-12.643-81.374C442.553,148.889,465.693,145.319,485.221,145.319z M384.282,446.482    c-0.293-0.104-0.585-0.204-0.879-0.308c-12.664-4.488-25.604-9.645-38.679-15.399c9.391-5.288,18.78-10.831,28.133-16.624    c6.506-4.029,12.915-8.132,19.223-12.297C389.993,417.319,387.384,432.241,384.282,446.482z M354.546,384.59    c-16.005,9.913-32.282,19.152-48.565,27.593c-16.271-8.447-32.535-17.688-48.528-27.593c-14.5-8.981-28.486-18.32-41.854-27.909    c-1.148-16.409-1.759-33.215-1.794-50.276c-0.036-17.14,0.509-34.03,1.598-50.523c13.427-9.638,27.479-19.024,42.051-28.05    c15.995-9.907,32.262-19.141,48.535-27.578c16.281,8.442,32.555,17.68,48.559,27.592c14.503,8.983,28.49,18.323,41.86,27.914    c1.144,16.389,1.753,33.171,1.789,50.204c0.036,17.162-0.51,34.069-1.602,50.577C383.167,366.18,369.117,375.565,354.546,384.59z     M228.186,446.26c-3.112-14.074-5.745-28.815-7.871-44.085c6.181,4.075,12.459,8.09,18.828,12.035    c9.318,5.772,18.672,11.295,28.028,16.567c-13.04,5.727-25.946,10.865-38.575,15.34    C228.459,446.164,228.323,446.211,228.186,446.26z M179.397,328.843c-9.042-7.469-17.666-15.028-25.836-22.632    c8.144-7.582,16.742-15.117,25.754-22.564c-0.202,7.552-0.3,15.157-0.283,22.805C179.048,313.96,179.171,321.427,179.397,328.843z     M227.686,165.994c0.304,0.107,0.606,0.211,0.91,0.319c12.646,4.481,25.569,9.626,38.626,15.364    c-9.373,5.279-18.744,10.812-28.079,16.594c-6.509,4.032-12.922,8.137-19.234,12.304    C221.99,195.128,224.592,180.221,227.686,165.994z M383.838,166.154c3.114,14.1,5.746,28.868,7.871,44.168    c-6.188-4.08-12.474-8.1-18.851-12.05c-9.339-5.784-18.713-11.319-28.09-16.6c13.061-5.738,25.987-10.884,38.637-15.367    C383.548,166.254,383.692,166.205,383.838,166.154z M432.605,283.601c9.036,7.466,17.656,15.021,25.82,22.621    c-8.141,7.578-16.735,15.11-25.743,22.554c0.204-7.57,0.301-15.193,0.285-22.859C432.952,298.435,432.83,290.993,432.605,283.601z     M244.352,108.433c17.335-45.946,40.167-73.402,61.13-73.446c20.905,0,43.843,27.363,61.359,73.239    c2.93,7.676,5.665,15.739,8.208,24.129c-22.348,7.764-45.552,17.479-69.052,28.944c-23.702-11.564-47.101-21.344-69.626-29.14    C238.844,123.915,241.502,115.986,244.352,108.433z M75.422,163.394c9.741-15.727,36.358-18.075,51.357-18.075    c19.402,0,42.367,3.526,67.605,10.3c-5.685,25.476-9.86,52.962-12.408,81.697c-19.106,14.379-36.893,29.252-53.028,44.337    c-8.581-9.221-16.43-18.445-23.437-27.598C75.659,215.063,64.412,181.171,75.422,163.394z M126.778,467.103    c-14.999,0-41.615-2.348-51.356-18.075c-11.01-17.776,0.237-51.669,30.087-90.662c7.001-9.146,14.845-18.363,23.418-27.577    c16.217,15.167,34.103,30.121,53.32,44.574c2.65,28.594,6.906,55.945,12.652,81.306    C169.459,463.531,146.313,467.103,126.778,467.103z M367.647,503.885c-17.335,45.946-40.167,73.342-61.077,73.342h-0.049    c-20.908,0-43.847-27.292-61.363-73.167c-2.917-7.639-5.639-15.662-8.172-24.006c22.315-7.754,45.482-17.453,68.945-28.897    c23.707,11.576,47.113,21.369,69.645,29.179C373.118,488.516,370.477,496.385,367.647,503.885z M536.578,449.086    c-9.741,15.727-36.353,18.133-51.351,18.133c-0.001,0-0.003,0-0.004,0c-19.409,0-42.382-3.553-67.629-10.346    c5.693-25.495,9.874-53.004,12.426-81.763c19.102-14.376,36.886-29.246,53.02-44.328c8.586,9.227,16.441,18.456,23.451,27.614    C536.341,397.388,547.588,431.309,536.578,449.086z"/>
                    </g>
                  </g>
                  </svg>
                  Laboratoire
                </Link>
              </li>
              {/* <!-- Menu Item Laboratoire --> */}
            
              {/* <!-- Menu Item Calendrier --> */}
              <li>
                <Link
                  href="/calendrier"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7499 2.9812H14.2874V2.36245C14.2874 2.02495 14.0062 1.71558 13.6405 1.71558C13.2749 1.71558 12.9937 1.99683 12.9937 2.36245V2.9812H4.97803V2.36245C4.97803 2.02495 4.69678 1.71558 4.33115 1.71558C3.96553 1.71558 3.68428 1.99683 3.68428 2.36245V2.9812H2.2499C1.29365 2.9812 0.478027 3.7687 0.478027 4.75308V14.5406C0.478027 15.4968 1.26553 16.3125 2.2499 16.3125H15.7499C16.7062 16.3125 17.5218 15.525 17.5218 14.5406V4.72495C17.5218 3.7687 16.7062 2.9812 15.7499 2.9812ZM1.77178 8.21245H4.1624V10.9968H1.77178V8.21245ZM5.42803 8.21245H8.38115V10.9968H5.42803V8.21245ZM8.38115 12.2625V15.0187H5.42803V12.2625H8.38115ZM9.64678 12.2625H12.5999V15.0187H9.64678V12.2625ZM9.64678 10.9968V8.21245H12.5999V10.9968H9.64678ZM13.8374 8.21245H16.228V10.9968H13.8374V8.21245ZM2.2499 4.24683H3.7124V4.83745C3.7124 5.17495 3.99365 5.48433 4.35928 5.48433C4.7249 5.48433 5.00615 5.20308 5.00615 4.83745V4.24683H13.0499V4.83745C13.0499 5.17495 13.3312 5.48433 13.6968 5.48433C14.0624 5.48433 14.3437 5.20308 14.3437 4.83745V4.24683H15.7499C16.0312 4.24683 16.2562 4.47183 16.2562 4.75308V6.94683H1.77178V4.75308C1.77178 4.47183 1.96865 4.24683 2.2499 4.24683ZM1.77178 14.5125V12.2343H4.1624V14.9906H2.2499C1.96865 15.0187 1.77178 14.7937 1.77178 14.5125ZM15.7499 15.0187H13.8374V12.2625H16.228V14.5406C16.2562 14.7937 16.0312 15.0187 15.7499 15.0187Z"
                      fill=""
                    />
                  </svg>
                  Calendrier
                </Link>
              </li>
              {/* <!-- Menu Item Calendrier --> */}

            {/* <!-- Menu Item PailotChat --> */}
              <li>
                <Link
                  href="/pailotChat"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("settings") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg"
                   
                   width="18" height="18" 
                   viewBox="0 0 24 24" fill="none">
                  <path d="M7 18L7 15" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M12 18V12" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M17 18V9" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  PailotChat
                </Link>
              </li>
              {/* <!-- Menu Item PailotChat --> */}

              {/* <!-- Menu Item E-TableauBlanc --> */}
              <li>
                <Link
                  href="/etableaublanc"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                <svg 
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V14C23 15.6569 21.6569 17 20 17H13.562L18.6402 21.2318C19.0645 21.5853 19.1218 22.2159 18.7682 22.6402C18.4147 23.0645 17.7841 23.1218 17.3598 22.7682L13 19.135V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V19.135L6.64018 22.7682C6.21591 23.1218 5.58534 23.0645 5.23178 22.6402C4.87821 22.2159 4.93554 21.5853 5.35982 21.2318L10.438 17H4C2.34315 17 1 15.6569 1 14V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14V4C3 3.44772 3.44772 3 4 3H20Z" fill=""/>
                </svg>
                  E-TableauBlanc
                </Link>
              </li>
              {/* <!-- Menu Item E-TableauBlanc --> */}

              {/* <!-- Menu Item Communauté --> */}
              <li>
                <Link
                  href="/communaute"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("tables") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg 
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" version="1.1" id="Capa_1" 
                  width="18" height="18" 
                  viewBox="0 0 95.098 95.098" 
                  >
                  <g>
                    <g>
                      <path d="M47.549,0C21.288,0,0,21.288,0,47.549s21.288,47.549,47.549,47.549c26.262,0,47.549-21.288,47.549-47.549    S73.811,0,47.549,0z M47.549,85.098C26.844,85.098,10,68.253,10,47.549S26.844,10,47.549,10s37.549,16.845,37.549,37.549    S68.254,85.098,47.549,85.098z"/>
                      <path d="M77.665,29.911c-0.25-0.428-0.755-0.633-1.231-0.503l-33.783,9.213c-0.186,0.052-0.355,0.151-0.492,0.288L17.596,63.865    c-0.346,0.354-0.414,0.895-0.164,1.32c0.25,0.428,0.755,0.635,1.232,0.504l33.783-9.214c0.093-0.024,0.182-0.062,0.265-0.11    c0.083-0.049,0.159-0.108,0.228-0.178l24.562-24.957C77.848,30.879,77.915,30.337,77.665,29.911z M26.705,59.756l16.46-16.725    l6.179,10.551L26.705,59.756z"/>
                    </g>
                  </g>
                  </svg>
                  Communauté
                </Link>
              </li>
              {/* <!-- Menu Item Communauté --> */}

            {/* <!-- Menu Item Éditeur --> */}
              <li>
                <Link
                  href="/editeur"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("settings") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" 
                  className="fill-current"
                  width="18" height="18" 
                  viewBox="0 0 20 20">
                  <rect x="0" fill="none" width="20" height="20"/>
                  <g>
                  <path d="M15 2H7.54c-.83 0-1.59.2-2.28.6-.7.41-1.25.96-1.65 1.65C3.2 4.94 3 5.7 3 6.52s.2 1.58.61 2.27c.4.69.95 1.24 1.65 1.64.69.41 1.45.61 2.28.61h.43V17c0 .27.1.51.29.71.2.19.44.29.71.29.28 0 .51-.1.71-.29.2-.2.3-.44.3-.71V5c0-.27.09-.51.29-.71.2-.19.44-.29.71-.29s.51.1.71.29c.19.2.29.44.29.71v12c0 .27.1.51.3.71.2.19.43.29.71.29.27 0 .51-.1.71-.29.19-.2.29-.44.29-.71V4H15c.27 0 .5-.1.7-.3.2-.19.3-.43.3-.7s-.1-.51-.3-.71C15.5 2.1 15.27 2 15 2z"/>
                  </g>
                  </svg>
                  Éditeur
                </Link>
              </li>
              {/* <!-- Menu Item Éditeur --> */}
            
            </ul>
          </div>

        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
