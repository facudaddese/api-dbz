import type { Links, Meta } from "./characters";

export interface Planets {
  items: Planet[];
  meta: Meta;
  links: Links;
}

export interface ItemPlanet {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: null;
  characters: CharactersOfPlanet[];
}

export interface CharactersOfPlanet {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: null;
}

export interface Planet {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: null;
}
