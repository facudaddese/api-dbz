"use client";

import { CharactersGrid } from "@/app/components/characters/CharactersGrid";
import { useAppSelector } from "@/app/store";
import DeleteFavorites from "./DeleteFavorites";
import Link from "next/link";

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
          Guarda a tus guerreros favoritos desde{" "}
          <Link
            href={"/dashboard/characters"}
            className="text-amber-500/95 underline hover:text-amber-500/80"
          >
            Personajes.
          </Link>
        </h2>
      )}
    </section>
  );
}
