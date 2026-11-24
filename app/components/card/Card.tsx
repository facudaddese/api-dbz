import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  name: string;
  image: string;
  href?: string;
  subtitle?: string | null;
  favorite?: ReactNode;
  imageFit?: "contain" | "cover";
}

const containerStyles = {
  contain: "p-3",
  cover: "pb-3",
};

const imageStyles = {
  contain:
    "w-full h-85 py-2 object-contain transition-transform duration-400 ease hover:scale-[1.2]",
  cover: "w-full h-full object-cover rounded-t-2xl",
};

export const Card = ({
  name,
  image,
  href,
  subtitle,
  favorite,
  imageFit = "contain",
}: CardProps) => {
  return (
    <div
      className={`flex flex-col items-center rounded-2xl bg-slate-900/60 hover:outline hover:outline-amber-500/95 ${containerStyles[imageFit]}`}
    >
      {favorite && (
        <div className="flex justify-end w-full z-200">{favorite}</div>
      )}

      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        loading="eager"
        className={imageStyles[imageFit]}
      />

      <div className="flex flex-col justify-center items-center gap-1 p-4">
        <h2 className="text-[25px] font-bold text-white">{name}</h2>
        {subtitle && (
          <span className="text-[14px] rounded-xl text-yellow-400/95 px-2">
            {subtitle}
          </span>
        )}
      </div>

      {href && (
        <Link
          href={href}
          className="mt-2 p-1 w-30 text-center hover:bg-amber-500/95 hover:text-black hover:font-bold bg-slate-700 text-white rounded-2xl cursor-pointer font-semibold"
        >
          Ver detalles
        </Link>
      )}
    </div>
  );
};
