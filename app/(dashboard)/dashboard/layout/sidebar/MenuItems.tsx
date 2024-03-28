import {
  IconBooks,
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  // {
  //   navlabel: true,
  //   subheader: "Home",
  // },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/dashboard",
  },
  // {
  //   navlabel: true,
  //   subheader: "Utilities",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Typography",
  //   icon: IconTypography,
  //   href: "/dashboard/tutoriels/SchoolLevel",
  // },
  {
    id: uniqueId(),
    title: "Tutoriels",
    icon: IconBooks,
    href: "/dashboard/tutorials/SchoolLevel",
  },
  // {
  //   id: uniqueId(),
  //   title: "Shadow",
  //   icon: IconCopy,
  //   href: "/dashboard/utilities/shadow",
  // },
  // {
  //   navlabel: true,
  //   subheader: "Auth",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Login",
  //   icon: IconLogin,
  //   href: "/dashboard/authentication/login",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Register",
  //   icon: IconUserPlus,
  //   href: "/dashboard/authentication/register",
  // },
  // {
  //   navlabel: true,
  //   subheader: "Extra",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Icons",
  //   icon: IconMoodHappy,
  //   href: "/dashboard/icons",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Sample Page",
  //   icon: IconAperture,
  //   href: "/dashboard/sample-page",
  // },
];

export default Menuitems;
