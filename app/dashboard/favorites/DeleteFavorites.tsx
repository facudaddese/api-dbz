"use client";

import { useAppDispatch } from "@/app/store";
import { clearFav } from "@/app/store/CharactersSlice";

export default function DeleteFavorites() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex w-full items-center justify-center md:p-3">
      <button
        className="bg-slate-700 text-white py-1 px-3 rounded-2xl cursor-pointer hover:bg-amber-500/95 hover:text-black font-semibold"
        onClick={() => dispatch(clearFav())}
      >
        Limpiar favoritos
      </button>
    </div>
  );
}
