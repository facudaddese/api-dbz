import { Characters } from "@/app/types";

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const res = await fetch("https://dragonball-api.com/api/characters?page=1");
  const data: Characters = await res.json();
  return data.items.map(({ id }) => ({ id: String(id) }));
}
