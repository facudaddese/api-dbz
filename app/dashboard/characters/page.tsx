import { CharactersGrid } from "@/app/components";
import { Characters, Item } from "@/app/types/characters";
import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Personajes",
  description:
    "Descubrí los personajes de Dragon Ball Z. Explorá sus razas, géneros, afiliaciones y niveles de poder.",
};

const getCharacters = async (limit: number): Promise<Item[]> => {
  "use cache";
  cacheLife("hours");
  try {
    const res = await fetch(
      `https://dragonball-api.com/api/characters?limit=${limit}`,
    );
    if (!res.ok) throw new Error("Error al obtener los personajes");
    const data: Characters = await res.json();
    return data.items;
  } catch (error) {
    console.error(error);
    throw new Error("No se pudieron traer los personajes");
  }
};

async function CharactersList() {
  const characters = await getCharacters(20);
  return <CharactersGrid characters={characters} />;
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
