"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarMenuProps {
  sidebarItems: {
    label: string;
    href: string;
  }[];
}

export const SidebarMenu = ({ sidebarItems }: SidebarMenuProps) => {
  const path = usePathname();
  return (
    <div className="flex flex-col gap-3">
      {sidebarItems.map((item) => {
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center p-3 rounded-[10px] ${path === item.href || path.startsWith(`${item.href}/`) ? "bg-amber-500/95 text-black" : "text-white hover:bg-amber-500/75"} gap-4 font-bold`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};
