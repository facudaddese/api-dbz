import { Metadata } from "next";
import { Suspense } from "react";
import TransformationContent from "./TransformationContent";
import { notFound } from "next/navigation";
import { cacheLife } from "next/cache";
import { getCharacter } from "@/app/lib/characters";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  "use cache";
  cacheLife("hours");
  const { id } = await params;
  const character = await getCharacter(Number(id));
  if (!character) return notFound();

  return {
    title: character.name,
    description: character.name,
  };
}

export default function TransformationsPage({ params }: Props) {
  return (
    <div className="text-white">
      <Suspense fallback="Cargando transformaciones...">
        <TransformationContent params={params} />
      </Suspense>
    </div>
  );
}
