import { Character } from "@/app/types";
import { cacheLife } from "next/cache";

export const getCharacter = async (id: number): Promise<Character | null> => {
  "use cache";
  cacheLife("hours");
  const res = await fetch(`https://dragonball-api.com/api/characters/${id}`);
  if (res.status === 400 || res.status === 404) return null;
  if (!res.ok) throw new Error("Error al obtener los personajes");
  const data: Character = await res.json();
  return data;
};
