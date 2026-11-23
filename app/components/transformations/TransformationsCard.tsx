"use client";

import IsFavorite from "@/app/dashboard/characters/IsFavorite";
import { Transformation } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";

interface TransformationsCardProps {
  transformations: Transformation | null;
}

export const TransformationsCard = ({
  transformations,
}: TransformationsCardProps) => {
  const path = usePathname();
  if (!transformations) return notFound();
  const { id, name, image } = transformations;

  return (
    <div className="flex flex-col items-center p-3 rounded-2xl bg-slate-900/60 hover:outline hover:outline-amber-500/95">
      <div className="flex justify-end w-full z-200">
        <IsFavorite character={transformations} />
      </div>
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        loading="eager"
        className="w-full h-85 object-contain transition-transform duration-400 ease hover:scale-[1.2]"
      />
      <h2 className="text-3xl font-bold text-white p-4">{name}</h2>
      {path === "/dashboard/transformations" && (
        <Link
          href={`/dashboard/transformations/${id}`}
          className="mt-2 p-1 w-30 text-center hover:bg-amber-500/95 hover:text-black hover:font-bold bg-slate-700 text-white rounded-2xl cursor-pointer font-semibold"
        >
          Ver detalles
        </Link>
      )}
    </div>
  );
};
