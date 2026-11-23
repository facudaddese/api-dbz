import { ItemPlanet } from "@/app/types";
import { cacheLife } from "next/cache";
import { notFound } from "next/navigation";

export const getPlanet = async (id: number): Promise<ItemPlanet> => {
  "use cache";
  cacheLife("hours");
  const res = await fetch(`https://dragonball-api.com/api/planets/${id}`);
  if (res.status === 400 || res.status === 404) return notFound();
  if (!res.ok) throw new Error("Error al obtener el planeta");
  const data: ItemPlanet = await res.json();
  return data;
};
