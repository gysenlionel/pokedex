import axios from "axios";
import { Pokemons, Pokemon } from "../types/data.model";

export const getNextPage = async (loadAsync: boolean, nextUrl: string,
    setNextUrl: React.Dispatch<React.SetStateAction<string>>,
    baseUrl: string, setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>,
    setLoadAsync: React.Dispatch<React.SetStateAction<boolean>>) => {

    if (loadAsync) {

      const res = await axios.get(nextUrl);
      setNextUrl(res.data.next);
      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(`${baseUrl}${pokemon.name}`);
        setPokemons((p) => [...p, poke.data]);
        setLoadAsync(false);

      });
    }
    
  };