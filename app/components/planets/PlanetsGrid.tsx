import { Planet } from "@/app/types";
import { Card } from "../card/Card";

interface PlanetsProps {
  planets: Planet[];
}

export const PlanetsGrid = ({ planets }: PlanetsProps) => {
  return (
    <section className="grid gap-5 place-content-center px-5 pb-5 md:p-5 lg:main-grid main-grid-responsive">
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
