import { PlanetsGrid } from "@/app/components";
import { Planet } from "@/app/types";

interface PlanetsProps {
  planets: Planet[];
}

export default function PlanetsContent({ planets }: PlanetsProps) {
  return <PlanetsGrid planets={planets} />;
}
