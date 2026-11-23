import { Transformation } from "@/app/types";
import { Card } from "../card/Card";
import IsFavorite from "@/app/dashboard/characters/IsFavorite";

interface TransformationsGridProps {
  transformations: Transformation[] | null;
}

export const TransformationsGrid = ({
  transformations,
}: TransformationsGridProps) => {
  return (
    <section className="grid gap-5 place-content-center p-5 main-grid">
      {transformations?.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          image={item.image}
          href={`/dashboard/transformations/${item.id}`}
          favorite={<IsFavorite character={item} />}
        />
      ))}
    </section>
  );
};
