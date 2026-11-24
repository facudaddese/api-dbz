"use client";

import { Affiliation, Race, Gender } from "@/app/types";
import { ChangeEventHandler, MouseEventHandler } from "react";

interface FiltersProps {
  race: Race | undefined | string;
  handleRace: ChangeEventHandler<HTMLSelectElement>;
  affiliation: Affiliation | undefined | string;
  handleAffiliation: ChangeEventHandler<HTMLSelectElement>;
  gender: Gender | undefined | string;
  handleGender: ChangeEventHandler<HTMLSelectElement>;
  sort: string;
  handleSort: ChangeEventHandler<HTMLSelectElement>;
  input: string;
  handleInput: ChangeEventHandler<HTMLInputElement>;
  handleClear: MouseEventHandler<HTMLButtonElement>;
}

const stylesSelect =
  "rounded-xl w-52 border border-slate-600 bg-slate-900 px-4 py-2 text-white outline-none focus:border-amber-500/95";

export const Filters = ({
  race,
  handleRace,
  affiliation,
  handleAffiliation,
  gender,
  handleGender,
  sort,
  handleSort,
  input,
  handleInput,
  handleClear,
}: FiltersProps) => {
  return (
    <div className="flex flex-wrap flex-col items-center gap-5 px-3 pb-3 md:p-3">
      <input
        id="text"
        type="text"
        className="w-65 text-slate-300 text-center p-1 outline-0 border-b border-slate-600 hover:border-slate-400 placeholder:italic"
        placeholder="Busque su personaje..."
        value={input}
        onChange={handleInput}
      />
      <div className="grid grid-cols-1 sm:flex items-center justify-center flex-wrap gap-3">
        {/* Raza */}
        <select
          name="race"
          className={stylesSelect}
          value={race}
          onChange={handleRace}
        >
          <option value="">Todas las razas</option>
          <option value="Saiyan">Saiyajin</option>
          <option value="Human">Humano</option>
          <option value="Namekian">Namekiano</option>
          <option value="Frieza Race">Raza de Freezer</option>
          <option value="Android">Androide</option>
          <option value="Majin">Majin</option>
          <option value="Jiren Race">Raza de Jiren</option>
          <option value="God">Dios</option>
          <option value="Angel">Ángel</option>
          <option value="Unknown">Desconocida</option>
        </select>

        {/* Género */}
        <select
          name="gender"
          className={stylesSelect}
          value={gender}
          onChange={handleGender}
        >
          <option value="">Todos los géneros</option>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
        </select>

        {/* Afiliación */}
        <select
          name="affiliation"
          className={stylesSelect}
          value={affiliation}
          onChange={handleAffiliation}
        >
          <option value="">Todas las afiliaciones</option>
          <option value="Z Fighter">Guerreros Z</option>
          <option value="Army of Frieza">Ejército de Freezer</option>
          <option value="Freelancer">Independiente</option>
        </select>

        {/* Ordenar */}
        <select
          name="sort"
          className={stylesSelect}
          value={sort}
          onChange={handleSort}
        >
          <option value="">Ordenar por</option>
          <option value="name-asc">Nombre: A-Z</option>
          <option value="name-desc">Nombre: Z-A</option>
        </select>

        {/* Limpiar filtros */}
        <button
          onClick={handleClear}
          className="bg-slate-700 text-white py-1 px-3 rounded-2xl cursor-pointer hover:bg-amber-500/95 hover:text-black font-semibold"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
};
