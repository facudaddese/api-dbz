import { Transformation } from "@/app/types";
import { cacheLife } from "next/cache";

export const getTransformations = async (): Promise<
  Transformation[] | null
> => {
  "use cache";
  cacheLife("hours");
  const res = await fetch("https://dragonball-api.com/api/transformations");
  if (res.status === 400 || res.status === 404) return null;
  if (!res.ok) throw new Error("Error al obtener las transformaciones");
  const data: Transformation[] = await res.json();
  return data;
};
