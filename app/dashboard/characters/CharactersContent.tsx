"use client";

import { useFilters } from "@/app/hooks/useFilters";
import { Item } from "@/app/types";
import { CharactersGrid, Filters } from "./components";

interface CharactersContentInterface {
  characters: Item[];
}

export default function CharactersContent({
  characters,
}: CharactersContentInterface) {
  const { input, handleInput } = useFilters();
  const filters = characters.filter((item) =>
    item.name.trim().toLowerCase().includes(input.trim().toLowerCase()),
  );

  return (
    <>
      <Filters input={input} handleInput={handleInput} />
      <CharactersGrid characters={filters} />
    </>
  );
}
