import { PlanetsGrid } from "@/app/components";
import { Planet } from "@/app/types";

interface InterfacePlanetsProps {
  planets: Planet[];
}

export default function PlanetsContent({ planets }: InterfacePlanetsProps) {
  return <PlanetsGrid planets={planets} />;
}
