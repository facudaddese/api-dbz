import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, Transformation } from "../types";
import { FavoriteType, getFavoriteType, isSameFavorite } from "../lib";

interface InitialState {
  favorites: (Item | Transformation)[];
}

const initialState: InitialState = {
  favorites: [],
};

const CharactersSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFav: (
      state,
      action: PayloadAction<{ character: Item | Transformation }>,
    ) => {
      const exists = state.favorites.some((item) =>
        isSameFavorite(item, action.payload.character),
      );
      if (!exists) state.favorites.push(action.payload.character);
    },
    deleteFav: (
      state,
      action: PayloadAction<{ id: number; type: FavoriteType }>,
    ) => {
      state.favorites = state.favorites.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            getFavoriteType(item) === action.payload.type
          ),
      );
    },
    clearFav: (state) => {
      state.favorites = [];
    },
    setFavorites: (state, action: PayloadAction<(Item | Transformation)[]>) => {
      state.favorites = action.payload;
    },
  },
});

export const { addFav, deleteFav, clearFav, setFavorites } =
  CharactersSlice.actions;

export default CharactersSlice.reducer;
