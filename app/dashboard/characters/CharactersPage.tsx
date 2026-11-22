import CharactersFilters from "./CharactersFilters";
import { getCharacters } from "./page";

export default async function CharactersPage() {
  const characters = await getCharacters();
  return <CharactersFilters characters={characters} />;
}
