import type { Metadata } from "next";
import TransformationsList from "./TransformationsList";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Transformaciones",
  description:
    "Explorá las transformaciones de los personajes de Dragon Ball Z. Descubrí sus distintas formas y evoluciones.",
};

export default function TransformationsPage() {
  return (
    <div className="text-white">
      <Suspense fallback="Cargando transformaciones...">
        <TransformationsList />
      </Suspense>
    </div>
  );
}
