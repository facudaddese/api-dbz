import type { Metadata } from "next";
import { Suspense } from "react";
import PlanetsList from "./PlanetsList";

export const metadata: Metadata = {
  title: "Planetas",
  description:
    "Explorá los planetas del universo de Dragon Ball Z. Descubrí sus características, ubicaciones y habitantes.",
};

export default function PlanetsPage() {
  return (
    <div className="text-white">
      <Suspense fallback="Cargando planetas...">
        <PlanetsList />
      </Suspense>
    </div>
  );
}
