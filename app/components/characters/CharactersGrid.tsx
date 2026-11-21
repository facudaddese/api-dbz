import { Item } from "@/app/types/characters";
import { CharacterCard } from "./CharacterCard";

interface CharactersGridProps {
  characters: Item[] | null;
}

export const CharactersGrid = ({ characters }: CharactersGridProps) => {
  if (!characters) return;
  return (
    <section className="grid gap-4 place-content-center p-5 characters-grid">
      {characters.map((item) => (
        <CharacterCard key={item.id} character={item} />
      ))}
    </section>
  );
};
