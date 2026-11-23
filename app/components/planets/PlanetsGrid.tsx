import { Planet } from "@/app/types";
import { Card } from "../card/Card";

interface PlanetsProps {
  planets: Planet[];
}

export const PlanetsGrid = ({ planets }: PlanetsProps) => {
  return (
    <section className="grid gap-5 place-content-center p-5 main-grid">
      {planets.map((planet) => (
        <Card
          key={planet.id}
          name={planet.name}
          image={planet.image}
          href={`/dashboard/planets/${planet.id}`}
          imageFit="cover"
        />
      ))}
    </section>
  );
};
