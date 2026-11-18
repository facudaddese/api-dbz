import { Item } from "@/app/types/characters";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CharacterCardProps {
  character: Item;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const { id, name, image, race } = character;
  return (
    <div className="flex flex-col items-center p-3 rounded-2xl bg-slate-700/20 hover:bg-slate-700/80">
      <div className="flex justify-end w-full z-200">
        <Star size={20} className="cursor-pointer" />
        {/* Estrella rellena: <Star size={20} fill="currentColor" /> */}
      </div>
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="w-100 h-80 object-contain transition-transform duration-500 ease-in-out hover:scale-[1.2]"
      />
      <div className="flex flex-col justify-center items-center gap-1 p-4">
        <h2 className="text-3xl font-bold">{name}</h2>
        <span className="text-[14px] rounded-xl border border-yellow-400/95 px-2">
          {race}
        </span>
      </div>
      <Link
        href={`/dashboard/character/${id}`}
        className="rounded-2xl border mt-2 p-1 w-30 text-center hover:bg-yellow-400/95 hover:text-black hover:font-bold"
      >
        Más detalles
      </Link>
    </div>
  );
};
