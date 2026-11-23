import { Item, Transformation } from "@/app/types";
import { CharacterCard } from "./CharacterCard";

interface CharactersGridProps {
  characters: (Item | Transformation)[] | null;
}

export const CharactersGrid = ({ characters }: CharactersGridProps) => {
  if (!characters) return;
  return (
    <section className="grid gap-5 place-content-center p-5 main-grid">
      {characters.map((item) => (
        <CharacterCard key={item.id} character={item} />
      ))}
    </section>
  );
};
