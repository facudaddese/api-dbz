import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import IsFavorite from "../../characters/IsFavorite";
import { getTransformation } from "@/app/lib/transformations";

interface TransformationContentProps {
  params: Promise<{ id: string }>;
}

const styleCharacter = "text-yellow-400/95";
const stylesSpan = "text-slate-400";
const styleDivsResponsive = "lg:block flex flex-col items-center";

export default async function TransformationContent({
  params,
}: TransformationContentProps) {
  const { id } = await params;
  const transformation = await getTransformation(Number(id));
  const { name, image, ki } = transformation;

  return (
    <section className="p-5 h-screen">
      {/* Regresar a transformaciones */}
      <div className="[grid-area:link] w-10">
        <Link href={"/dashboard/transformations"}>
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
              <IsFavorite character={transformation} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 pb-5">
            <div className={`${styleDivsResponsive}`}>
              <span className={`${stylesSpan}`}>Ki</span>
              <p className={`${styleCharacter}`}>{ki}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
