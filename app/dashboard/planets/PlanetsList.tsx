import { getPlanets } from "@/app/lib/planets";
import PlanetsContent from "./PlanetsContent";

export default async function PlanetsList() {
  const planets = await getPlanets();
  return <PlanetsContent planets={planets} />;
}
