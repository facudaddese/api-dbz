import { Planet } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

interface PlanetProps {
  planet: Planet;
}

export const PlanetCard = ({ planet }: PlanetProps) => {
  const { id, name, image } = planet;
  return (
    <div className="flex flex-col items-center rounded-2xl pb-3 bg-slate-700/20 hover:bg-slate-700/80">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        loading="eager"
        className="w-full h-full object-cover rounded-t-2xl"
      />
      <div className="flex flex-col justify-center items-center gap-1 p-4">
        <h2 className="text-3xl font-bold text-white">{name}</h2>
      </div>
      <Link
        href={`/dashboard/planets/${id}`}
        className="mt-2 p-1 w-30 text-center hover:bg-amber-500/95 hover:text-black hover:font-bold bg-slate-900 text-white rounded-2xl cursor-pointer font-semibold"
      >
        Ver detalles
      </Link>
    </div>
  );
};
