import { CharactersGrid } from "@/app/components/characters/CharactersGrid";
import { Character } from "@/app/types";
import { notFound } from "next/navigation";

interface TransformationsContentProps {
  character: Character | null;
}

export default function TransformationsContent({
  character,
}: TransformationsContentProps) {
  if (!character) notFound();
  return <CharactersGrid characters={character.transformations} />;
}
