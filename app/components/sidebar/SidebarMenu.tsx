"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarMenuProps {
  sidebarItems: {
    label: string;
    href: string;
  }[];
  handleMenu: () => void;
}

export const SidebarMenu = ({ sidebarItems, handleMenu }: SidebarMenuProps) => {
  const path = usePathname();
  return (
    <div className="flex flex-col md:gap-3 md:m-0 mt-10 gap-1 md:w-full w-50 z-100">
      {sidebarItems.map((item) => {
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex z-100 items-center md:p-3 p-2 rounded-[10px] ${path === item.href || path.startsWith(`${item.href}/`) ? "bg-amber-500/95 text-black" : "text-white hover:bg-amber-500/75"} gap-4 font-bold`}
            onClick={handleMenu}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};
