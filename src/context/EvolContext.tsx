import { createContext, useState } from "react";
import { Pokemon } from "../types/data.model";

interface EvolContextProviderProps {
  children: React.ReactNode;
}

interface EvolContextInterface {
  pokemons: (Pokemon | null | undefined)[];
  registerPokemon1: (poke: Pokemon) => void;
  registerPokemon2: (poke: Pokemon | null) => void;
  registerPokemon3: (poke: Pokemon | null) => void;
  registerSpecialPokemons: (poke: Pokemon[] | null) => void;
  specialPokemonsChart: Pokemon[] | null;
}

const EvolContext = createContext({} as EvolContextInterface);

export const EvolContextProvider = ({ children }: EvolContextProviderProps) => {
  const [pokemon1, setPokemon] = useState<Pokemon>();
  const [pokemon2, setPokemon2] = useState<Pokemon | null>();
  const [pokemon3, setPokemon3] = useState<Pokemon | null>();
  const [specialPokemonsChart, SetSpecialPokemonChart] = useState<
    Pokemon[] | null
  >([]);

  const registerPokemon1 = (poke: Pokemon) => {
    setPokemon(poke);
  };
  const registerPokemon2 = (poke: Pokemon | null) => {
    setPokemon2(poke);
  };
  const registerPokemon3 = (poke: Pokemon | null) => {
    setPokemon3(poke);
  };

  const pokemons = [];
  pokemons.push(pokemon1, pokemon2, pokemon3);

  const registerSpecialPokemons = (poke: Pokemon[] | null) => {
    SetSpecialPokemonChart(poke);
  };

  const value = {
    pokemons,
    registerPokemon1,
    registerPokemon2,
    registerPokemon3,
    registerSpecialPokemons,
    specialPokemonsChart,
  };

  return <EvolContext.Provider value={value}>{children}</EvolContext.Provider>;
};

export default EvolContext;
