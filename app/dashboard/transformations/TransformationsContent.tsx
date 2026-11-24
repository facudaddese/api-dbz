"use client";

import { TransformationsGrid } from "@/app/components";
import { Filters } from "@/app/components/filters/transformations/Filters";
import { useFilters } from "@/app/hooks";
import { Transformation } from "@/app/types";

interface TransformationsContentProps {
  transformations: Transformation[] | null;
}

export default function TransformationsContent({
  transformations,
}: TransformationsContentProps) {
  const { character, handleCharacter, handleClear } = useFilters();
  if (!transformations) return null;

  const filters = transformations.filter((item) => {
    if (character === "Cell") {
      return [
        "Imperfect Form",
        "Semi Perfect Form",
        "Super Perfect Form",
      ].includes(item.name);
    }

    return item.name.includes(character);
  });
  return (
    <>
      <Filters
        character={character}
        handleCharacter={handleCharacter}
        handleClear={handleClear}
      />
      <TransformationsGrid transformations={filters} />
    </>
  );
}
