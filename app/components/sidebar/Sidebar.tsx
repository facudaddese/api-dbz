import Image from "next/image";
import { SidebarMenu } from "./SidebarMenu";
import logo from "../../../public/img-dashboard.png";
import { Suspense } from "react";

const sidebarItems = [
  { label: "Personajes", href: "/dashboard/characters" },
  { label: "Favoritos", href: "/dashboard/favorites" },
  { label: "Villanos", href: "/dashboard/villains" },
  {
    label: "Transformaciones",
    href: "/dashboard/transformations",
  },
  { label: "Planetas", href: "/dashboard/planets" },
];

export const Sidebar = () => {
  return (
    <aside className="[grid-area:sidebar] border border-r-gray-100/20 p-2">
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
    </aside>
  );
};
