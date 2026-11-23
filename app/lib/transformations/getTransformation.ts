import { Transformation } from "@/app/types";

export const getTransformation = async (
  id: number,
): Promise<Transformation> => {
  const res = await fetch(
    `https://dragonball-api.com/api/transformations/${id}`,
  );
  const data: Transformation = await res.json();
  return data;
};
