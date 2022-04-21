import axios from "axios";
import { Species } from "../types/data.model";

export const getSpeciesDetails = async(urlSpecies:string, 
    setSpeciesDetails:React.Dispatch<React.SetStateAction<Species | undefined>>,
    setFetchEvol:React.Dispatch<React.SetStateAction<boolean>>)=>{

    const res = await axios.get(urlSpecies)
    setSpeciesDetails(res.data)
    setFetchEvol(true)
}