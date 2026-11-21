import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types/characters";

interface InitialState {
  favorites: Item[];
}

const initialState: InitialState = {
  favorites: [],
};

const CharactersSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<{ character: Item }>) => {
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
  },
});

export const { addFav, deleteFav, clearFav } = CharactersSlice.actions;

export default CharactersSlice.reducer;
