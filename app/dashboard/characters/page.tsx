import type { Metadata } from "next";
import { Suspense } from "react";
import CharactersList from "./CharactersList";

export const metadata: Metadata = {
  title: "Personajes",
  description:
    "Descubrí los personajes de Dragon Ball Z. Explorá sus razas, géneros, afiliaciones y niveles de poder.",
};

export default async function CharactersPage() {
  return (
    <div className="text-white">
      <Suspense fallback="Cargando personajes...">
        <CharactersList />
      </Suspense>
    </div>
  );
}
