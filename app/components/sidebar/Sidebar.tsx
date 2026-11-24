"use client";

import Image from "next/image";
import { SidebarMenu } from "./SidebarMenu";
import logo from "../../../public/img-dashboard.png";
import { Suspense } from "react";
import { ArrowUp, Menu } from "lucide-react";
import { useView } from "@/app/hooks/useView";
import { useModal } from "@/app/hooks";
import { useSidebarMenu } from "@/app/hooks/useSidebarMenu";

const sidebarItems = [
  { label: "Personajes", href: "/dashboard/characters" },
  { label: "Favoritos", href: "/dashboard/favorites" },
  { label: "Transformaciones", href: "/dashboard/transformations" },
  { label: "Planetas", href: "/dashboard/planets" },
];

export const Sidebar = () => {
  const { modal } = useModal();
  const { view } = useView();
  const { menu, handleMenu } = useSidebarMenu();

  return (
    <aside className="[grid-area:sidebar] flex flex-col justify-between items-end md:border md:border-r-slate-700/80 p-2">
      <div className="w-full h-55">
        {modal && (
          <Menu
            className="text-amber-500/95 absolute"
            size={30}
            onClick={handleMenu}
          />
        )}
        <div className="flex items-center justify-center">
          <Image
            src={logo}
            width={200}
            height={200}
            loading="eager"
            alt="Logo de Dragon Ball"
            className="object-contain lg:w-100 lg:h-auto h-50 md:relative absolute top-0 z-90"
          />
        </div>
        {(!modal || menu) && (
          <Suspense>
            <SidebarMenu sidebarItems={sidebarItems} handleMenu={handleMenu} />
          </Suspense>
        )}
      </div>
      {view && (
        <div
          className="flex justify-center w-10 mx-2 cursor-pointer rounded-full bg-slate-700 p-1 hover:scale-[1.1] md:relative md:right-0 md:bottom-0 absolute right-2 bottom-3"
          onClick={() =>
            document
              .querySelector("main")
              ?.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          <ArrowUp size={30} className="text-white" />
        </div>
      )}
    </aside>
  );
};
