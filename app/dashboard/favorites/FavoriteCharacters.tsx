"use client";

import { CharactersGrid } from "@/app/components/characters/CharactersGrid";
import { useAppSelector } from "@/app/store";
import DeleteFavorites from "./DeleteFavorites";

export default function FavoriteCharacters() {
  const characters = useAppSelector((state) => state.characters.favorites);
  return (
    <section>
      {characters.length ? (
        <>
          <DeleteFavorites />
          <CharactersGrid characters={characters} />
        </>
      ) : (
        <h2 className="text-white text-3xl text-center p-5">
          Guardá tus personajes favoritos para encontrarlos fácilmente
        </h2>
      )}
    </section>
  );
}
