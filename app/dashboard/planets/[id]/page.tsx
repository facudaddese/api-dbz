import { getPlanet } from "@/app/lib/planets";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlanetContent } from "./PlanetContent";
import { Suspense } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const planet = await getPlanet(Number(id));
  if (!planet) notFound();

  return {
    title: planet.name,
    description: planet.description,
  };
}

export default function PlanetName({ params }: Props) {
  return (
    <div className="text-white">
      <Suspense fallback="Cargando planeta...">
        <PlanetContent params={params} />
      </Suspense>
    </div>
  );
}
