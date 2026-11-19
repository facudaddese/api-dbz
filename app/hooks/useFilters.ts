import { useState } from "react";
import { Affiliation, Gender, Race } from "../types";

export const useFilters = () => {
  const [race, setRace] = useState<Race | undefined>();
  const [gender, setGender] = useState<Gender | undefined>();
  const [affiliation, setAffiliation] = useState<Affiliation | undefined>();
  const [sort, setSort] = useState("");
  const [input, setInput] = useState("");

  const handleRace = ({ target }: React.ChangeEvent<HTMLSelectElement>) =>
    setRace(target.value as Race);

  const handleGender = ({ target }: React.ChangeEvent<HTMLSelectElement>) =>
    setGender(target.value as Gender);

  const handleAffiliation = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) =>
    setAffiliation(target.value as Affiliation);

  const handleSort = ({ target }: React.ChangeEvent<HTMLSelectElement>) =>
    setSort(target.value);

  const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setInput(target.value);

  return {
    race,
    handleRace,
    gender,
    handleGender,
    affiliation,
    handleAffiliation,
    sort,
    handleSort,
    input,
    handleInput,
  };
};
