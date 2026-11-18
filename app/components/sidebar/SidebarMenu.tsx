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
    <div className="flex flex-col gap-3">
      {sidebarItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center p-3 rounded-[10px] text-white hover:bg-yellow-400/95 gap-4 hover:font-bold hover:text-black"
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
