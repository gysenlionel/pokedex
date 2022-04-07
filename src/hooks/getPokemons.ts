import axios from "axios";
import { Pokemon } from "../types/data.model";

export const getPokemons = async (baseUrl:string,setPokemons:React.Dispatch<React.SetStateAction<Pokemon[]>>,
    setNextUrl: React.Dispatch<React.SetStateAction<string>>) => {

    const res = await axios.get(`${baseUrl}?limit=20`);
      
      setNextUrl(res.data.next);
      res.data.results.forEach(async (pokemon: Pokemon) => {
        const poke = await axios.get(`
        ${baseUrl}${pokemon.name}
        `);
        setPokemons((p) => [...p, poke.data]);
      });
    };
