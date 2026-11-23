"use client";

import { useAppDispatch, useAppSelector } from "@/app/store";
import { addFav, deleteFav } from "@/app/store/CharactersSlice";
import { Item, Transformation } from "@/app/types";
import { Star } from "lucide-react";

export default function IsFavorite({
  character,
}: {
  character: Item | Transformation;
}) {
  const { id } = character;
  const isFavorite = useAppSelector((state) =>
    state.characters.favorites.some((item) => item.id === id),
  );
  const dispatch = useAppDispatch();

  return (
    <>
      {isFavorite ? (
        <Star
          size={20}
          fill="currentColor"
          className="cursor-pointer text-yellow-400"
          onClick={() => dispatch(deleteFav({ id }))}
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
