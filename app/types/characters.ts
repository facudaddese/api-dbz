export interface Characters {
  items: Item[];
  meta: Meta;
  links: Links;
}

export interface Item {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: Race;
  gender: Gender;
  description: string;
  image: string;
  affiliation: Affiliation;
  deletedAt: null;
}

export type Affiliation = "Z Fighter" | "Army of Frieza";

export type Gender = "Male" | "Female";

export type Race =
  | "Saiyan"
  | "Human"
  | "Android"
  | "Nucleico benigno"
  | "Nucleico"
  | "Frieza Race"
  | "God"
  | "Namekian"
  | "Angel"
  | "Majin"
  | "Unknown"
  | "Jiren Race"
  | "Evil";

export interface Links {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: Race;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: null;
  originPlanet: OriginPlanet;
  transformations: Transformation[];
}

export interface OriginPlanet {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: null;
}

export interface Transformation {
  id: number;
  name: string;
  image: string;
  ki: string;
  deletedAt: null;
}
