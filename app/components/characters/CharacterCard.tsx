import { useAppDispatch, useAppSelector } from "@/app/store";
import { addFav, deleteFav } from "@/app/store/CharactersSlice";
import { Item } from "@/app/types/characters";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stylesStar = "cursor-pointer text-white";

interface CharacterCardProps {
  character: Item;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const { id, name, image, race } = character;
  const isFavorite = useAppSelector((state) =>
    state.characters.favorites.some((item) => item.id === id),
  );
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center p-3 rounded-2xl bg-slate-700/20 hover:bg-slate-700/80">
      <div className="flex justify-end w-full z-200">
        {isFavorite ? (
          <Star
            size={20}
            fill="currentColor"
            className={`${stylesStar}`}
            onClick={() => dispatch(deleteFav({ id }))}
          />
        ) : (
          <Star
            size={20}
            className={`${stylesStar}`}
            onClick={() => dispatch(addFav({ character }))}
          />
        )}
      </div>
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        loading="eager"
        className="w-100 h-80 object-contain transition-transform duration-500 ease-in-out hover:scale-[1.2]"
      />
      <div className="flex flex-col justify-center items-center gap-1 p-4">
        <h2 className="text-3xl font-bold text-white">{name}</h2>
        <span className="text-[14px] rounded-xl text-yellow-400/95 px-2">
          {race}
        </span>
      </div>
      <Link
        href={`/dashboard/characters/${id}`}
        className="mt-2 p-1 w-30 text-center hover:bg-amber-500/95 hover:text-black hover:font-bold bg-slate-900 text-white rounded-2xl cursor-pointer font-semibold"
      >
        Ver detalles
      </Link>
    </div>
  );
};
