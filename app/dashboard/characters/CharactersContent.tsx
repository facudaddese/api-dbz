"use client";

import { CharactersGrid } from "@/app/components/characters/CharactersGrid";
import { Filters } from "@/app/components/filters/Filters";
import { useFilters } from "@/app/hooks/useFilters";
import { Item } from "@/app/types";

interface CharactersContentInterface {
  characters: Item[];
}

export default function CharactersContent({
  characters,
}: CharactersContentInterface) {
  const {
    race,
    handleRace,
    gender,
    handleGender,
    affiliation,
    handleAffiliation,
    sort,
    handleSort,
    input,
    handleInput,
    handleClear,
  } = useFilters();

  const filters = characters.filter(
    (item) =>
      item.name.trim().toLowerCase().includes(input.trim().toLowerCase()) &&
      (!race || item.race === race) &&
      (!gender || item.gender === gender) &&
      (!affiliation || item.affiliation === affiliation),
  );

  switch (sort) {
    case "name-asc":
      filters.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case "name-desc":
      filters.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }

  return (
    <>
      <Filters
        race={race}
        handleRace={handleRace}
        affiliation={affiliation}
        handleAffiliation={handleAffiliation}
        gender={gender}
        handleGender={handleGender}
        sort={sort}
        handleSort={handleSort}
        input={input}
        handleInput={handleInput}
        handleClear={handleClear}
      />
      <CharactersGrid characters={filters} />
    </>
  );
}
