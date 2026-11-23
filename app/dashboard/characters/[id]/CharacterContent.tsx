import Link from "next/link";
import IsFavorite from "../IsFavorite";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getCharacter } from "@/app/lib/characters";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

const styleCharacter = "text-yellow-400/95";
const stylesSpan = "text-slate-400";
const styleDivsResponsive = "lg:block flex flex-col items-center";

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
    transformations,
  } = character;

  return (
    <section className="p-5 h-screen">
      {/* Regresar a personajes */}
      <div className="[grid-area:link] w-10">
        <Link href={"/dashboard/characters"}>
          <div className="w-10 cursor-pointer rounded-full bg-slate-700 p-1 hover:scale-[1.1] [grid-area:link]">
            <ArrowLeft size={30} />
          </div>
        </Link>
      </div>

      <div className="grid justify-items-center place-content-center my-auto lg:h-[95%] justify-center gap-5 lg:gap-20 character-grid-responsive lg:character-grid">
        {/* Imagen del personaje */}
        <div className="[grid-area:character] justify-items-center">
          <Image
            src={image}
            alt={name}
            width={450}
            height={550}
            loading="eager"
            className="object-contain max-h-155"
          />
        </div>

        {/* Descripcion */}
        <div className="[grid-area:description] flex gap-5 justify-center flex-col py-5">
          {" "}
          {/*flex flex-col gap-4*/}
          <div className={`${styleDivsResponsive}`}>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <h1 className="text-5xl font-bold pb-1">{name}</h1>
              <IsFavorite character={character} />
            </div>
            <span className={`${styleCharacter}`}>{race}</span>
          </div>
          <p className="text-slate-300 max-w-170 lg:text-start text-center">
            {description}
          </p>
          <div className="grid grid-cols-2 gap-4 pb-5">
            <div className={`${styleDivsResponsive}`}>
              <span className={`${stylesSpan}`}>Género</span>
              <p className={`${styleCharacter}`}>{gender}</p>
            </div>
            <div className={`${styleDivsResponsive}`}>
              <span className={`${stylesSpan}`}>Afiliación</span>
              <p className={`${styleCharacter}`}>{affiliation}</p>
            </div>
            <div className={`${styleDivsResponsive}`}>
              <span className={`${stylesSpan}`}>Ki</span>
              <p className={`${styleCharacter}`}>{ki}</p>
            </div>
            <div className={`${styleDivsResponsive}`}>
              <span className={`${stylesSpan}`}>Ki máximo</span>
              <p className={`${styleCharacter}`}>{maxKi}</p>
            </div>
          </div>
          <div className="lg:block flex justify-center">
            {transformations.length > 0 && (
              <Link
                href={`/dashboard/transformations/${id}`}
                className="bg-slate-700 text-white py-2 px-3 rounded-2xl font-semibold hover:bg-slate-600"
              >
                Ver transformaciones
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
