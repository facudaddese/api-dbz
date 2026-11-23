import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, Transformation } from "../types";

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
      const exists = state.favorites.some(
        (item) => item.id === action.payload.character.id,
      );
      if (!exists) state.favorites.push(action.payload.character);
    },
    deleteFav: (state, action: PayloadAction<{ id: number }>) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id,
      );
    },
    clearFav: (state) => {
      state.favorites = [];
    },
    setFavorites: (state, action: PayloadAction<Item[]>) => {
      state.favorites = action.payload;
    },
  },
});

export const { addFav, deleteFav, clearFav, setFavorites } =
  CharactersSlice.actions;

export default CharactersSlice.reducer;
