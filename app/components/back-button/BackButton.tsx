import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  href: string;
}

export const BackButton = ({ href }: BackButtonProps) => {
  return (
    <div className="w-10">
      <Link href={href} aria-label="Volver">
        <div className="w-full cursor-pointer rounded-full bg-slate-700 p-1 hover:scale-[1.1]">
          <ArrowLeft size={30} />
        </div>
      </Link>
    </div>
  );
};
