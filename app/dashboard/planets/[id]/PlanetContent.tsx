import Image from "next/image";
import { notFound } from "next/navigation";
import { getPlanet } from "@/app/lib/planets";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CharactersGrid } from "@/app/components";

interface Props {
  params: Promise<{ id: string }>;
}

export const PlanetContent = async ({ params }: Props) => {
  const { id } = await params;
  const planet = await getPlanet(Number(id));
  if (!planet) notFound();
  const { name, image, description, isDestroyed, characters } = planet;

  return (
    <section className="p-5">
      {/* Regresar a planetas */}
      <div className="w-10">
        <Link href={"/dashboard/planets"}>
          <div className="w-full cursor-pointer rounded-full bg-slate-700 p-1 hover:scale-[1.1]">
            <ArrowLeft size={30} />
          </div>
        </Link>
      </div>

      {/* Descripcion del planeta */}
      <div className="flex gap-15 justify-center flex-wrap py-5">
        <Image
          src={image}
          alt={description}
          width={200}
          height={200}
          loading="eager"
          className="object-cover w-90 h-full"
        />
        <div className="flex flex-col gap-5 xl:items-start items-center">
          <div>
            <h2 className="text-5xl font-bold">{name}</h2>
            <span
              className={`${isDestroyed ? "text-red-400" : "text-emerald-400"}`}
            >
              {isDestroyed ? "Planeta destruido" : "Planeta vigente"}
            </span>
          </div>
          <p className="text-slate-300 max-w-150 xl:text-start text-center">
            {description}
          </p>
        </div>
      </div>

      {/* Habitantes */}
      {characters.length > 0 && (
        <div className="pt-4">
          <h3 className="font-semibold text-center text-3xl pb-3">Habitantes</h3>
          <CharactersGrid characters={characters} />
        </div>
      )}
    </section>
  );
};
