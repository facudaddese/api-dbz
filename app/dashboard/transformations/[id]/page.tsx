import { notFound } from "next/navigation";
import { getCharacter } from "../../characters/[id]/page";
import TransformationsContent from "./TransformationsContent";
import { Suspense } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

export const TransformationsData = async ({ params }: Props) => {
  const { id } = await params;
  const character = await getCharacter(Number(id));
  if (!character) notFound();
  return <TransformationsContent character={character} />;
};

export default function TransformationsPage({ params }: Props) {
  return (
    <Suspense
      fallback={<p className="text-white">Cargando transformaciones...</p>}
    >
      <TransformationsData params={params} />
    </Suspense>
  );
}
