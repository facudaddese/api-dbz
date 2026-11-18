import { CharactersGrid } from "@/app/components";
import { Characters, Item } from "@/app/types/characters";
import type { Metadata } from "next";
import { cacheLife } from "next/cache";

export const metadata: Metadata = {
  title: "Characters",
  description: "Description",
};

const getCharacters = async (limit: number): Promise<Item[]> => {
  "use cache";
  cacheLife("hours");
  const res = await fetch(
    `https://dragonball-api.com/api/characters?limit=${limit}`,
  );
  if (!res.ok) throw new Error("Error al cargar los personajes");
  const data: Characters = await res.json();
  return data.items;
};

export default async function CharactersPage() {
  const characters = await getCharacters(12);
  return <CharactersGrid characters={characters} />;
}
