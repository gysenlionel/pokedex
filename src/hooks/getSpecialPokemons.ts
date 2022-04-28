import axios from "axios";
import { Pokemon } from "../types/data.model";

export const getSpecialPokemons = (specialPokemon:(string | undefined)[] | undefined,
baseUrl:string,
setSpecialPokes:React.Dispatch<React.SetStateAction<Pokemon[]>>,
specialPokes:Pokemon[]) => {
    specialPokemon!.forEach(async (pokemon:string | undefined) => {
        const poke = await axios.get(`${baseUrl}${pokemon}`)
        setSpecialPokes((p) => [...p, poke.data])
    })
    setSpecialPokes(specialPokes.reverse())
}