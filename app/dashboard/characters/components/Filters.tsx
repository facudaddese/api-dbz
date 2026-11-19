"use client";

import { ChangeEventHandler } from "react";

interface FiltersProps {
  input: string;
  handleInput: ChangeEventHandler<HTMLInputElement>;
}

const stylesSelect =
  "rounded-xl w-52 border border-slate-600 bg-slate-900 px-4 py-2 text-white outline-none focus:border-yellow-400/95";

export const Filters = ({ input, handleInput }: FiltersProps) => {
  return (
    <div className="flex flex-wrap flex-col items-center gap-5 p-3">
      <input
        id="text"
        type="text"
        className="w-65 text-slate-300 text-center p-1 outline-0 border-b border-slate-600 hover:border-slate-400 placeholder:italic"
        placeholder="Busque su personaje..."
        value={input}
        onChange={handleInput}
      />
      <div className="flex items-center justify-center flex-wrap gap-3">
        {/* Raza */}
        <select name="race" defaultValue="" className={stylesSelect}>
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
        <select name="gender" defaultValue="" className={stylesSelect}>
          <option value="">Todos los géneros</option>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          <option value="Unknown">Desconocido</option>
        </select>

        {/* Afiliación */}
        <select name="affiliation" defaultValue="" className={stylesSelect}>
          <option value="">Todas las afiliaciones</option>
          <option value="Z Fighter">Guerreros Z</option>
          <option value="Army of Frieza">Ejército de Freezer</option>
          <option value="Freelancer">Independiente</option>
        </select>

        {/* Ordenar */}
        <select name="sort" defaultValue="" className={stylesSelect}>
          <option value="">Ordenar por</option>
          <option value="name-asc">Nombre: A-Z</option>
          <option value="name-desc">Nombre: Z-A</option>
          <option value="ki-asc">Ki: menor a mayor</option>
          <option value="ki-desc">Ki: mayor a menor</option>
        </select>

        {/* Limpiar filtros */}
        <button className="bg-slate-700 text-white py-1 px-3 rounded-2xl cursor-pointer hover:bg-amber-500/95 hover:text-black font-semibold">
          Limpiar filtros
        </button>
      </div>
    </div>
  );
};
