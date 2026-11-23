import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getCharacter } from "@/app/lib/characters";
import { CharacterContent } from "./CharacterContent";

interface Props {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { id } = await params;
  const character = await getCharacter(Number(id));
  if (!character) return notFound();

  return {
    title: character.name,
    description: character.description,
  };
};

export default function CharacterPage({ params }: Props) {
  return (
    <div className="text-white">
      <Suspense fallback="Cargando personaje...">
        <CharacterContent params={params} />
      </Suspense>
    </div>
  );
}
