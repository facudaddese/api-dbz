import { getCharacters } from "@/app/lib/characters";
import CharactersContent from "./CharactersContent";

export default async function CharactersList() {
  const characters = await getCharacters();
  return <CharactersContent characters={characters} />;
}
