import type { Item, Transformation } from "@/app/types";

export type FavoriteItem = Item | Transformation;
export type FavoriteType = "character" | "transformation";

export const getFavoriteType = (item: FavoriteItem): FavoriteType =>
  "race" in item ? "character" : "transformation";

export const isSameFavorite = (a: FavoriteItem, b: FavoriteItem): boolean =>
  a.id === b.id && getFavoriteType(a) === getFavoriteType(b);
