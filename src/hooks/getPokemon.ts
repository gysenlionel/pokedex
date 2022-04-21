import axios from "axios";
import { Pokemon } from "../types/data.model";

export const getPokemon = async (baseUrl:string,
    setPokeData:React.Dispatch<React.SetStateAction<Pokemon | undefined>>,
    setFetchSpecDetails:React.Dispatch<React.SetStateAction<boolean>>) => {
    const res = await axios.get(`${baseUrl}`);
    setPokeData(res.data);
    setFetchSpecDetails(true)
  };