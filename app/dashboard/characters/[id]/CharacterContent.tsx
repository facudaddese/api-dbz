import Link from "next/link";
import { notFound } from "next/navigation";
import IsFavorite from "../IsFavorite";
import { getCharacter } from "@/app/lib/characters";
import { Content } from "@/app/components/content/Content";

interface Props {
  params: Promise<{ id: string }>;
}

export const CharacterContent = async ({ params }: Props) => {
  const { id } = await params;
  const character = await getCharacter(Number(id));
  if (!character) notFound();
  const {
    name,
    image,
    race,
    gender,
    affiliation,
    ki,
    maxKi,
    description,
    transformations = [],
  } = character;

  return (
    <Content
      backHref="/dashboard/characters"
      name={name}
      image={image}
      subtitle={race}
      description={description}
      favorite={<IsFavorite character={character} />}
      stats={[
        { label: "Género", value: gender },
        { label: "Afiliación", value: affiliation },
        { label: "Ki", value: ki },
        { label: "Ki máximo", value: maxKi },
      ]}
      action={
        transformations.length > 0 && (
          <Link
            href="/dashboard/transformations"
            className="bg-slate-700 text-white py-2 px-3 rounded-2xl font-semibold hover:bg-slate-600"
          >
            Ver transformaciones
          </Link>
        )
      }
    />
  );
};
