import { FlaskRound, BookMarked, MessageCircleMore, FilePenLine, PenTool } from "lucide-react";

export const SidebarData = [
    {
        id: 1,
        linkTo: "/dashboard/labo",
        iconTag: <FlaskRound />,
        title: "Labo",
    },
    {
        id: 2,
        linkTo: "/dashboard/community",
        iconTag: <MessageCircleMore />,
        title: "Communauté",
    },
    {
        id: 3,
        linkTo: "/dashboard/editor",
        iconTag: <FilePenLine />,
        title: "Éditeur",
    },
    {
        id: 4,
        linkTo: "/dashboard/tutorials",
        iconTag: <BookMarked />,
        title: "Tutoriels",
    },
    {
        id: 5,
        linkTo: "/dashboard/board",
        iconTag: <PenTool />,
        title: "Conseil",
    }
]