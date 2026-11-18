import { Character } from "@/app/types";
import { Metadata } from "next";
import { cacheLife } from "next/cache";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { id } = await params;
  const character = await getCharacter(Number(id));

  if (!character)
    return {
      title: "Not Found",
      description: "Not Found",
    };

  return {
    title: `Dragon Ball - ${character.name}`,
    description: `${character.name}`,
  };
};

export const getCharacter = async (id: number): Promise<Character | null> => {
  "use cache";
  cacheLife("hours");
  const res = await fetch(
    `https://dragonball-api.com/api/characters/${Number(id)}`,
  );
  if (!res.ok) throw new Error("Error al cargar la información del personaje");
  const data: Character = await res.json();
  return data;
};

const CharacterContent = async ({ params }: Props) => {
  const { id } = await params;
  const character = await getCharacter(Number(id));
  if (!character) return notFound();

  return <h1>{character.name}</h1>;
};

export default async function CharacterPage({ params }: Props) {
  return (
    <div className="text-white">
      <Suspense fallback="Loading character...">
        <CharacterContent params={params} />
      </Suspense>
    </div>
  );
}
