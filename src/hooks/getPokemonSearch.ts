import axios from "axios";
import { Pokemon } from "../types/data.model";

export const getPokemonSearch = async(pokemon:string,
    setPokemonSearch:React.Dispatch<React.SetStateAction<Pokemon | undefined>>
    ) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        setPokemonSearch(res.data)
    }