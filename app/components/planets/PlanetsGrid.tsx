import { Planet } from "@/app/types";
import { PlanetCard } from "./PlanetCard";

interface PlanetsProps {
  planets: Planet[];
}

export const PlanetsGrid = ({ planets }: PlanetsProps) => {
  return (
    <section className="grid gap-5 place-content-center p-5 planets-grid">
      {planets.map((item) => (
        <PlanetCard key={item.id} planet={item} />
      ))}
    </section>
  );
};
