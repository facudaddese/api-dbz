import { Metadata } from "next";
import { Suspense } from "react";
import TransformationContent from "./TransformationContent";
import { notFound } from "next/navigation";
import { cacheLife } from "next/cache";
import { getTransformation } from "@/app/lib/transformations";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  "use cache";
  cacheLife("hours");
  const { id } = await params;
  const transformation = await getTransformation(Number(id));
  if (!transformation) return notFound();

  return {
    title: transformation.name,
    description: `${transformation.name} - Ki: ${transformation.ki}`,
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
