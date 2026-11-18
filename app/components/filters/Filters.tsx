export const Filters = () => {
  return (
    <div className="flex items-center gap-5 p-3">
      <div className="flex flex-wrap gap-3">
        {/* Raza */}
        <select
          name="race"
          defaultValue=""
          className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-2 text-white outline-none focus:border-yellow-400/95"
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
          defaultValue=""
          className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-2 text-white outline-none focus:border-yellow-400/95"
        >
          <option value="">Todos los géneros</option>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          <option value="Unknown">Desconocido</option>
        </select>

        {/* Afiliación */}
        <select
          name="affiliation"
          defaultValue=""
          className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-2 text-white outline-none focus:border-yellow-400/95"
        >
          <option value="">Todas las afiliaciones</option>
          <option value="Z Fighter">Guerreros Z</option>
          <option value="Army of Frieza">Ejército de Freezer</option>
          <option value="Freelancer">Independiente</option>
        </select>

        {/* Ordenar */}
        <select
          name="sort"
          defaultValue="name-asc"
          className="rounded-xl border border-slate-600 bg-slate-900 px-4 py-2 text-white outline-none focus:border-yellow-400/95"
        >
          <option value="name-asc">Nombre: A-Z</option>
          <option value="name-desc">Nombre: Z-A</option>
          <option value="ki-asc">Ki: menor a mayor</option>
          <option value="ki-desc">Ki: mayor a menor</option>
        </select>
      </div>

      <button className="bg-slate-700 text-white py-1 px-3 rounded-2xl cursor-pointer">Limpiar filtros</button>
    </div>
  );
};
