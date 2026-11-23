import { Transformation } from "@/app/types";
import { TransformationsCard } from "./TransformationsCard";

interface TransformationsGridProps {
  transformations: Transformation[] | null;
}

export const TransformationsGrid = ({
  transformations,
}: TransformationsGridProps) => {
  return (
    <section className="grid gap-5 place-content-center p-5 main-grid">
      {transformations?.map((item) => (
        <TransformationsCard key={item.id} transformations={item} />
      ))}
    </section>
  );
};
