
import { Characters, Item } from "@/app/types/characters";
import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import { Suspense } from "react";
import CharactersContent from "./CharactersContent";

export const metadata: Metadata = {
  title: "Personajes",
  description:
    "Descubrí los personajes de Dragon Ball Z. Explorá sus razas, géneros, afiliaciones y niveles de poder.",
};

export const getCharacters = async (): Promise<Item[]> => {
  "use cache";
  cacheLife("hours");
  let page = 1;
  let next = true;
  const charactersAux: Item[] = [];
  try {
    while (next) {
      const res = await fetch(
        `https://dragonball-api.com/api/characters?page=${page}`,
      );
      if (!res.ok) throw new Error("Error al obtener los personajes");
      const data: Characters = await res.json();
      next = !!data.links.next;
      if (next) page = data.meta.currentPage + 1;
      charactersAux.push(...data.items);
    }
    return charactersAux;
  } catch (error) {
    console.error(error);
    throw new Error("No se pudieron traer los personajes");
  }
};

export async function CharactersList() {
  const characters = await getCharacters();
  return <CharactersContent characters={characters} />;
}

export default async function CharactersPage() {
  return (
    <div className="text-white">
      <Suspense fallback="Loading characters...">
        <CharactersList />
      </Suspense>
    </div>
  );
}
