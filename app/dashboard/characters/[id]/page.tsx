import { Character, Characters } from "@/app/types";
import { Metadata } from "next";
import { cacheLife } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { id } = await params;
  const character = await getCharacter(Number(id));
  if (!character) return notFound();

  return {
    title: character.name,
    description: character.description,
  };
};

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const res = await fetch("https://dragonball-api.com/api/characters?page=1");
  const data: Characters = await res.json();
  return data.items.map(({ id }) => ({ id: String(id) }));
}

export const getCharacter = async (id: number): Promise<Character | null> => {
  "use cache";
  cacheLife("hours");
  const res = await fetch(`https://dragonball-api.com/api/characters/${id}`);
  if (res.status === 400) return null;
  if (!res.ok) throw new Error("Error al obtener el personaje");
  const data: Character = await res.json();
  return data;
};

const styleCharacter = "text-yellow-400/95";
const stylesSpan = "text-slate-400";

export const CharacterContent = async ({ params }: Props) => {
  const { id } = await params;
  const character = await getCharacter(Number(id));
  if (!character) notFound();
  const { name, image, race, gender, affiliation, ki, maxKi, description } =
    character;

  return (
    <section className="grid place-content-center justify-evenly gap-5 p-5 md:h-screen grid-cols-1 md:character-grid">
      <div className="flex items-center justify-end">
        <Image
          src={image}
          alt={name}
          width={450}
          height={550}
          className="object-contain max-h-155"
        />
      </div>
      <div className="flex flex-col justify-center gap-5 py-5">
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <span className={`${styleCharacter}`}>{race}</span>
        </div>
        <p className="text-slate-300 max-w-150">{description}</p>
        <div className="grid grid-cols-2 gap-4 pb-5">
          <div>
            <span className={`${stylesSpan}`}>Género</span>
            <p className={`${styleCharacter}`}>{gender}</p>
          </div>
          <div>
            <span className={`${stylesSpan}`}>Afiliación</span>
            <p className={`${styleCharacter}`}>{affiliation}</p>
          </div>
          <div>
            <span className={`${stylesSpan}`}>Ki</span>
            <p className={`${styleCharacter}`}>{ki}</p>
          </div>
          <div>
            <span className={`${stylesSpan}`}>Ki máximo</span>
            <p className={`${styleCharacter}`}>{maxKi}</p>
          </div>
        </div>
        <div>
          <Link
            href={"/dashboard/transformations/"}
            className="bg-slate-700 text-white p-2 rounded-2xl font-semibold hover:bg-slate-600"
          >
            Ver transformaciones
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function CharacterPage({ params }: Props) {
  return (
    <div className="text-white">
      <Suspense fallback="Loading character...">
        <CharacterContent params={params} />
      </Suspense>
    </div>
  );
}
