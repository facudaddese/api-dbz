import { notFound } from "next/navigation";
import IsFavorite from "../../characters/IsFavorite";
import { getTransformation } from "@/app/lib/transformations";
import { Content } from "@/app/components/content/Content";

interface TransformationContentProps {
  params: Promise<{ id: string }>;
}

export default async function TransformationContent({
  params,
}: TransformationContentProps) {
  const { id } = await params;
  const transformation = await getTransformation(Number(id));
  if (!transformation) notFound();
  const { name, image, ki } = transformation;

  return (
    <Content
      backHref="/dashboard/transformations"
      name={name}
      image={image}
      favorite={<IsFavorite character={transformation} />}
      stats={[{ label: "Ki", value: ki }]}
    />
  );
}
