"use client";

import Image from "next/image";
import { SidebarMenu } from "./SidebarMenu";
import logo from "../../../public/img-dashboard.png";
import { Suspense, useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const sidebarItems = [
  { label: "Personajes", href: "/dashboard/characters" },
  { label: "Favoritos", href: "/dashboard/favorites" },
  {
    label: "Transformaciones",
    href: "/dashboard/transformations",
  },
  { label: "Planetas", href: "/dashboard/planets" },
];

export const Sidebar = () => {
  const [view, setView] = useState(false);

  useEffect(() => {
    const main = document.querySelector("main");
    const handleScroll = () => {
      main?.addEventListener("scroll", () => {
        setView(main.scrollTop > 900);
      });
    };
    handleScroll();
    return () => main?.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="[grid-area:sidebar] flex flex-col justify-between items-end border border-r-gray-100/20 p-2">
      <div>
        <div className="flex items-center justify-center">
          <Image
            src={logo}
            width={200}
            height={200}
            loading="eager"
            alt="Logo de Dragon Ball"
            className="object-contain w-100"
          />
        </div>
        <Suspense>
          <SidebarMenu sidebarItems={sidebarItems} />
        </Suspense>
      </div>
      {view && (
        <div
          className="flex justify-center w-10 mx-2 cursor-pointer rounded-full bg-slate-700 p-1 hover:scale-[1.1]"
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
