import axios from "axios";
import { Pokemon } from "../types/data.model";

export const getPokeForDetails = async(baseUrl:string,
    setState:React.Dispatch<React.SetStateAction<Pokemon | undefined>>)=>{

        const res = await axios.get(baseUrl)
        setState(res.data)
    }