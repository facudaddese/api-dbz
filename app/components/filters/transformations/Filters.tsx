import { ChangeEventHandler, MouseEventHandler } from "react";

interface FiltersProps {
  character: string;
  handleCharacter: ChangeEventHandler<HTMLSelectElement>;
  handleClear: MouseEventHandler<HTMLButtonElement>;
}

const stylesSelect =
  "rounded-xl w-52 border border-slate-600 bg-slate-900 px-4 py-2 text-white outline-none focus:border-amber-500/95";

export const Filters = ({
  character,
  handleCharacter,
  handleClear,
}: FiltersProps) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 md:p-3">
      {/* Personaje */}
      <select
        name="character"
        className={stylesSelect}
        value={character}
        onChange={handleCharacter}
      >
        <option value="">Todos los Personajes</option>
        <option value="Goku">Goku</option>
        <option value="Vegeta">Vegeta</option>
        <option value="Piccolo">Piccolo</option>
        <option value="Freezer">Freezer</option>
        <option value="Zarbon">Zarbon</option>
        <option value="Cell">Cell</option>
        <option value="Gohan">Gohan</option>
        <option value="Trunks">Trunks</option>
        <option value="Gotenks">Gotenks</option>
        <option value="Buu">Buu</option>
        <option value="Gogeta">Gogeta</option>
        <option value="Vegetto">Vegetto</option>
        <option value="Janemba">Janemba</option>
        <option value="Broly">Broly</option>
      </select>

      {/* Limpiar filtros */}
      <button
        onClick={handleClear}
        className="bg-slate-700 text-white py-1 px-3 rounded-2xl cursor-pointer hover:bg-amber-500/95 hover:text-black font-semibold"
      >
        Limpiar filtros
      </button>
    </div>
  );
};
