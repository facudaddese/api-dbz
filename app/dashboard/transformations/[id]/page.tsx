import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Character } from "@/app/types";
import { CharactersGrid } from "@/app/components/characters/CharactersGrid";
import { getCharacter } from "@/app/lib/characters";

interface Props {
  params: Promise<{ id: string }>;
}

interface TransformationsContentProps {
  character: Character | null;
}

export const TransformationsData = async ({ params }: Props) => {
  const { id } = await params;
  const character = await getCharacter(Number(id));
  if (!character) notFound();
  return <TransformationsContent character={character} />;
};

export const TransformationsContent = ({ character }: TransformationsContentProps) => {
  if (!character) notFound();
  return <CharactersGrid characters={character.transformations} />;
}

export default function TransformationsPage({ params }: Props) {
  return (
    <Suspense
      fallback={<p className="text-white">Cargando transformaciones...</p>}
    >
      <TransformationsData params={params} />
    </Suspense>
  );
}
