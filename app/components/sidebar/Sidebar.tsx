import Image from "next/image";
import { SidebarMenu } from "./SidebarMenu";
import {
  UsersRound,
  Heart,
  Zap,
  Skull,
  Sparkles,
  Globe,
  Trophy,
} from "lucide-react";
import logo from "../../../public/img-dashboard.png";

export const Sidebar = () => {
  const sidebarItems = [
    { icon: UsersRound, label: "Personajes", href: "/dashboard/characters" },
    { icon: Heart, label: "Favoritos", href: "/dashboard/favorites" },
    {
      icon: Zap,
      label: "Super Saiyajines",
      href: "/dashboard/saiyajines",
    },
    { icon: Skull, label: "Villanos", href: "/dashboard/villains" },
    {
      icon: Sparkles,
      label: "Transformaciones",
      href: "/dashboard/transformations",
    },
    { icon: Globe, label: "Planetas", href: "/dashboard/planets" },
    { icon: Trophy, label: "Torneos", href: "/dashboard/tournaments" },
  ];
  return (
    <aside className="[grid-area:sidebar] border border-r-gray-100/20 p-2">
      <div className="w-full">
        <Image src={logo} alt="Logo de Dragon Ball Z" />
      </div>
      <SidebarMenu sidebarItems={sidebarItems} />
    </aside>
  );
};
