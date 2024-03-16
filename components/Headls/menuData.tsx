import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "ACCUEIL",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "VIRTULE-ZX10",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "NOS CARACTÉRISTIQUES",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "À PROPOS",
    newTab: false,
    path: "/docs",
  },
  {
    id: 3,
    title: "TUTORIELS",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Collège",
        newTab: false,
        path: "/college",
      },
      {
        id: 34,
        title: "Lycée",
        newTab: false,
        path: "/lycee",
      },
      {
        id: 35,
        title: "Virtule-ZX10",
        newTab: false,
        path: "/virtule-zx10",
      },
    ],
  },

  {
    id: 4,
    title: "SOUTIEN",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
