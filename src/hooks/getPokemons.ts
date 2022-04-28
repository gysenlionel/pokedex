import axios from "axios";
import { Pokemon } from "../types/data.model";

export const getPokemons = async (baseUrl:string,setPokemons:React.Dispatch<React.SetStateAction<Pokemon[]>>,
    setNextUrl: React.Dispatch<React.SetStateAction<string>>,
    setArrowLoad:React.Dispatch<React.SetStateAction<boolean>>) => {

    const res = await axios.get(`${baseUrl}?limit=20`);
      
      setNextUrl(res.data.next);
      res.data.results.forEach(async (pokemon: Pokemon) => {
        const poke = await axios.get(`
        ${baseUrl}${pokemon.name}
        `);
        setPokemons((p) => [...p, poke.data]);
      });
      const timer = setTimeout(() => {
        setArrowLoad(true)
      }, 1000);
      return () => clearTimeout(timer);
   
    };
