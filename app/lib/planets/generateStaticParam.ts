import { Planets } from "@/app/types";

export const generateStaticParams = async (): Promise<{ id: string }[]> => {
  const res = await fetch("https://dragonball-api.com/api/planets?page=1");
  const data: Planets = await res.json();
  return data.items.map(({ id }) => ({ id: String(id) }));
};
