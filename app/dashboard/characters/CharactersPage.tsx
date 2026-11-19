import CharactersContent from "./CharactersContent";
import { getCharacters } from "./page";

export default async function CharactersPage() {
  const characters = await getCharacters();
  return <CharactersContent characters={characters} />;
}
