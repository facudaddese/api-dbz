"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "./CharactersSlice";
import type { RootState } from "./store";

export default function FavoritesPersistence() {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state: RootState) => state.characters.favorites,
  );

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("favorites");

      if (saved) {
        dispatch(setFavorites(JSON.parse(saved)));
      }
    } catch (error) {
      console.error("No se pudieron leer los favoritos", error);
    } finally {
      setHydrated(true);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!hydrated) return;

    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (error) {
      console.error("No se pudieron guardar los favoritos", error);
    }
  }, [favorites, hydrated]);

  return null;
}
