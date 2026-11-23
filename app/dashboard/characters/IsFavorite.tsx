"use client";

import { getFavoriteType, isSameFavorite } from "@/app/lib";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { addFav, deleteFav } from "@/app/store/CharactersSlice";
import { Item, Transformation } from "@/app/types";
import { Star } from "lucide-react";

export default function IsFavorite({
  character,
}: {
  character: Item | Transformation;
}) {
  const isFavorite = useAppSelector((state) =>
    state.characters.favorites.some((f) => isSameFavorite(f, character)),
  );
  const dispatch = useAppDispatch();

  return (
    <>
      {isFavorite ? (
        <Star
          size={20}
          fill="currentColor"
          className="cursor-pointer text-yellow-400"
          onClick={() =>
            dispatch(
              deleteFav({ id: character.id, type: getFavoriteType(character) }),
            )
          }
        />
      ) : (
        <Star
          size={20}
          className="cursor-pointer text-white"
          onClick={() => dispatch(addFav({ character }))}
        />
      )}
    </>
  );
}
