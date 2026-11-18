import { Item } from "@/app/types/characters";
import { CharacterCard } from "./CharacterCard";
import { Filters } from "../filters/Filters";

interface CharactersGridProps {
  characters: Item[] | null;
}

export const CharactersGrid = ({ characters }: CharactersGridProps) => {
  if (!characters) return;
  return (
    <section>
      <Filters />
      <div className="grid gap-4 place-content-center text-white p-5 characters-grid">
        {characters.map((item) => (
          <CharacterCard key={item.id} character={item} />
        ))}
      </div>
    </section>
  );
};
