import { Characters, Item } from "@/app/types";
import { cacheLife } from "next/cache";

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
    throw new Error("Error al obtener los personajes");
  }
};
