import Link from "next/link";

import type { LucideIcon } from "lucide-react";

interface SidebarMenuProps {
  sidebarItems: {
    icon: LucideIcon;
    label: string;
    href: string;
  }[];
}

export const SidebarMenu = ({ sidebarItems }: SidebarMenuProps) => {
  return (
    <div className="">
      {sidebarItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center p-3 rounded-[10px] text-white hover:bg-yellow-500/90 gap-4 hover:font-bold hover:text-black"
          >
            <div>
              <Icon size={20} />
            </div>
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};
