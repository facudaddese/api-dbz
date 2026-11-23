import { Planet, Planets } from "@/app/types";
import { cacheLife } from "next/cache";

export const getPlanets = async (): Promise<Planet[]> => {
  "use cache";
  cacheLife("hours");
  let page = 1;
  let next = true;
  const planetsAux: Planet[] = [];
  try {
    while (next) {
      const res = await fetch(
        `https://dragonball-api.com/api/planets?page=${page}`,
      );
      if (!res.ok) throw new Error("Error al obtener los planetas");
      const data: Planets = await res.json();
      next = !!data.links.next;
      if (next) page = data.meta.currentPage + 1;
      planetsAux.push(...data.items);
    }
    return planetsAux;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los planetas");
  }
};
