import { Item, Transformation } from "@/app/types";
import { Card } from "../card/Card";
import IsFavorite from "@/app/dashboard/characters/IsFavorite";

interface CharactersGridProps {
  characters: (Item | Transformation)[] | null;
}

export const CharactersGrid = ({ characters }: CharactersGridProps) => {
  if (!characters) return;
  return (
    <section className="grid gap-5 place-content-center p-5 main-grid">
      {characters.map((item) => {
        const isCharacter = "race" in item;
        return (
          <Card
            key={`${isCharacter ? "c" : "t"}-${item.id}`}
            name={item.name}
            image={item.image}
            subtitle={isCharacter ? item.race : null}
            href={
              isCharacter
                ? `/dashboard/characters/${item.id}`
                : `/dashboard/transformations/${item.id}`
            }
            favorite={<IsFavorite character={item} />}
          />
        );
      })}
    </section>
  );
};
